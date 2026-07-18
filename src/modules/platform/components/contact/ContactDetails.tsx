import { SITE_CONTACT } from "@/data/site-data";
import SocialLinks from "@/components/shared/SocialLinks";

const detailBlocks = [
  { label: "CALL / WHATSAPP", lines: SITE_CONTACT.phones },
  { label: "EMAIL", lines: SITE_CONTACT.emails },
  { label: "HEAD OFFICE", lines: SITE_CONTACT.address },
  { label: "VISITING HOURS", lines: SITE_CONTACT.hours },
];

const ContactDetails = () => (
  <div className="relative overflow-hidden bg-forest-700 p-6 text-white sm:p-10 lg:px-11 lg:py-[52px]">
    <div className="absolute -top-[60px] -right-[60px] h-[220px] w-[220px] rounded-full border border-dashed border-gold-300/35" />
    <div className="mb-[22px] text-[11px] font-bold tracking-[0.24em] text-gold-300">
      REACH US DIRECTLY
    </div>
    <div className="flex flex-col gap-6 text-[14.5px]">
      {detailBlocks.map((block) => (
        <div key={block.label}>
          <div className="mb-1.5 text-[11px] font-bold tracking-[0.18em] text-sage-500">
            {block.label}
          </div>
          {block.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      ))}
    </div>
    <SocialLinks className="mt-[30px]" />
    <div className="mt-4 text-xs text-sage-500">{SITE_CONTACT.rc}</div>
  </div>
);

export default ContactDetails;
