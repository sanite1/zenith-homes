import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useSubmitContact } from "@/lib/network/api/contact.api";
import type { ApiErrorResponse } from "@/lib/network/types/api.types";
import { CONTACT_INTERESTS } from "@/data/contact-data";

// Client-side mirror of the backend rules; the 400 `fields` array stays
// the source of truth and is mapped back onto the inputs below.
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(200, "Name must be 200 characters or fewer"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(50, "Phone must be 50 characters or fewer")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us a little about what you're looking for")
    .max(5000, "Message must be 5000 characters or fewer"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const RATE_LIMIT_COOLDOWN_MS = 30_000;

// text-base on mobile keeps iOS Safari from zooming on focus (needs >=16px).
const inputClasses =
  "w-full rounded-xl border border-forest-700/20 bg-[#fbfbf9] px-[18px] py-[15px] text-base outline-none transition-colors focus:border-forest-700/50 sm:text-sm";

const ContactForm = () => {
  // CTAs elsewhere link to /contact?interest=<id> to preselect their chip.
  const [searchParams] = useSearchParams();
  const [interest, setInterest] = useState<string>(() => {
    const fromUrl = CONTACT_INTERESTS.find(
      (option) => option.id === searchParams.get("interest"),
    );
    return (fromUrl ?? CONTACT_INTERESTS[0]).label;
  });
  const [rateLimited, setRateLimited] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContact();

  // Re-enable submit a short while after a 429.
  useEffect(() => {
    if (!rateLimited) return;
    const timer = setTimeout(() => setRateLimited(false), RATE_LIMIT_COOLDOWN_MS);
    return () => clearTimeout(timer);
  }, [rateLimited]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    mutation.mutate(
      {
        name: values.name,
        email: values.email,
        message: values.message,
        phone: values.phone || undefined,
        subject: `Enquiry: ${interest}`,
        metadata: { interest, source: "contact-page" },
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          reset();
          toast.success("Thanks, we've received your message.");
        },
        onError: (error) => {
          const data = error.response?.data as ApiErrorResponse | undefined;
          if (error.response?.status === 400 && data?.fields) {
            for (const field of data.fields) {
              const path = String(field.path);
              if (
                path === "name" ||
                path === "email" ||
                path === "phone" ||
                path === "message"
              ) {
                setError(path, { type: "server", message: field.message });
              }
            }
          }
          if (error.response?.status === 429) {
            setRateLimited(true);
          }
        },
      },
    );
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-white px-8 py-20 text-center lg:px-12">
        <div className="mb-6 h-[52px] w-[52px] rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_30px_rgba(233,169,29,.6)]" />
        <h2 className="text-[26px] font-bold text-ink-900">
          Thanks, we've received your message.
        </h2>
        <p className="mt-2 max-w-[380px] text-sm leading-[1.75] text-ink-400">
          Our team usually replies within a working day. The climb has begun.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full border-[1.5px] border-forest-700/30 px-7 py-3 text-sm font-semibold text-forest-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 sm:p-10 lg:px-12 lg:py-[52px]"
    >
      <h2 className="text-[26px] font-bold text-ink-900">
        Tell us what you're looking for
      </h2>
      <p className="mt-1.5 text-sm text-ink-400">
        We usually reply within a working day.
      </p>

      <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register("name")}
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={cn(inputClasses, errors.name && "border-flame-500")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-flame-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("phone")}
            placeholder="Phone (WhatsApp welcome)"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={cn(inputClasses, errors.phone && "border-flame-500")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-flame-500">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={cn(inputClasses, errors.email && "border-flame-500")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-flame-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-[26px] mb-3 text-[11px] font-bold tracking-[0.2em] text-gold-600">
        I'M INTERESTED IN
      </div>
      <div className="flex flex-wrap gap-2.5">
        {CONTACT_INTERESTS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setInterest(option.label)}
            className={cn(
              "rounded-full px-[18px] py-2.5 text-[13px] transition-colors",
              interest === option.label
                ? "bg-forest-700 font-semibold text-white"
                : "border border-forest-700/25 text-ink-600 hover:border-forest-700",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-[22px]">
        <textarea
          {...register("message")}
          placeholder="Your message: family size, timeline, questions..."
          aria-invalid={!!errors.message}
          className={cn(
            inputClasses,
            "min-h-[110px] resize-y",
            errors.message && "border-flame-500",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-flame-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={mutation.isPending || rateLimited}
          className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[34px] py-4 text-[15px] font-bold text-forest-700 transition-shadow hover:shadow-[0_10px_26px_rgba(233,169,29,.5)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {mutation.isPending
            ? "Sending..."
            : rateLimited
              ? "Please wait a moment..."
              : "Send message →"}
        </button>
        <span className="text-xs text-ink-300">No spam. No agents. Just us.</span>
      </div>
    </form>
  );
};

export default ContactForm;
