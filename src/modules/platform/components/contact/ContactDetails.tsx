import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_CONTACT } from "@/data/site-data";
import SocialLinks from "@/components/shared/SocialLinks";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=No+3+Hamza+Sakwa+Cl+Guzape+Abuja";
const WHATSAPP_URL = "https://wa.me/2348146628362";

const ContactDetails = () => (
  <div className="relative flex flex-col overflow-hidden bg-forest-700 p-6 text-white sm:p-10 lg:px-11 lg:py-[52px]">
    <div className="pointer-events-none absolute -top-[60px] -right-[60px] h-[220px] w-[220px] rounded-full border border-dashed border-gold-300/35" />
    <div className="pointer-events-none absolute -bottom-24 -left-16 h-[220px] w-[220px] rounded-full bg-gold-300/[.07]" />

    <div className="mb-6 text-[11px] font-bold tracking-[0.24em] text-gold-300">
      REACH US DIRECTLY
    </div>

    <div className="relative flex flex-col gap-3">
      <div className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3.5 transition-colors hover:border-gold-300/40">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-300/[.15] text-gold-300">
            <Phone className="size-4" />
          </span>
          <div>
            <div className="text-[10.5px] font-bold tracking-[0.18em] text-sage-500">
              CALL / WHATSAPP
            </div>
            <div className="mt-1 flex flex-wrap gap-x-3 text-[14.5px]">
              <a href="tel:+2348146628362" className="hover:text-gold-300">
                0814 662 8362
              </a>
              <a href="tel:+2348163243281" className="hover:text-gold-300">
                0816 324 3281
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3.5 transition-colors hover:border-gold-300/40">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-300/[.15] text-gold-300">
            <Mail className="size-4" />
          </span>
          <div>
            <div className="text-[10.5px] font-bold tracking-[0.18em] text-sage-500">
              EMAIL
            </div>
            <div className="mt-1 flex flex-col text-[14.5px]">
              {SITE_CONTACT.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="hover:text-gold-300"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3.5 transition-colors hover:border-gold-300/40"
      >
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-300/[.15] text-gold-300">
            <MapPin className="size-4" />
          </span>
          <div>
            <div className="text-[10.5px] font-bold tracking-[0.18em] text-sage-500">
              HEAD OFFICE
            </div>
            <div className="mt-1 text-[14.5px] text-white">
              {SITE_CONTACT.address.join(" ")}
            </div>
            <div className="mt-0.5 text-[12px] font-semibold text-gold-300">
              Get directions →
            </div>
          </div>
        </div>
      </a>

      <div className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3.5">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-300/[.15] text-gold-300">
            <Clock className="size-4" />
          </span>
          <div>
            <div className="text-[10.5px] font-bold tracking-[0.18em] text-sage-500">
              VISITING HOURS
            </div>
            <div className="mt-1 text-[14.5px]">
              {SITE_CONTACT.hours[0]}
              <br />
              {SITE_CONTACT.hours[1]}
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mt-5 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-6 py-4 text-[14.5px] font-bold text-forest-900 transition-shadow hover:shadow-[0_10px_28px_rgba(233,169,29,.4)]"
    >
      <MessageCircle className="size-[18px]" />
      Chat with us on WhatsApp
    </a>

    <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-6 max-lg:mt-8">
      <SocialLinks />
      <div className="text-xs text-sage-500">{SITE_CONTACT.rc}</div>
    </div>
  </div>
);

export default ContactDetails;
