import PageMeta from "@/components/shared/PageMeta";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import DistrictsStrip from "../components/contact/DistrictsStrip";

export default function Contact() {
  return (
    <main>
      <PageMeta
        title="Contact | Zenith Homes and Apartments"
        description="Begin the climb: book a site visit, request price lists and payment plans, or reach Zenith Homes directly in Garki, Abuja."
      />
      <ContactHeader />
      <div className="relative z-[4] mx-auto -mt-[60px] max-w-[1168px] px-4 pb-[90px] sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(8,24,12,.18)] lg:grid-cols-[1.15fr_1fr]">
          <ContactForm />
          <ContactDetails />
        </div>
        <DistrictsStrip />
      </div>
    </main>
  );
}
