export interface ContactInterest {
  id: string;
  label: string;
}

export const CONTACT_INTERESTS: ContactInterest[] = [
  { id: "jahi", label: "The Dream Home, Jahi · now selling" },
  { id: "kado", label: "Homes like Kado · enquire" },
  { id: "idu", label: "Idu Estate · register interest" },
  { id: "guzape", label: "Guzape Terraces · waitlist" },
  { id: "payment-plans", label: "Payment plans" },
  { id: "other", label: "Other enquiry" },
];

export interface DistrictCard {
  id: string;
  district: string;
  title: string;
  blurb: string;
  tone: "delivered" | "selling" | "rising";
}

export const DISTRICT_CARDS: DistrictCard[] = [
  {
    id: "jahi",
    district: "JAHI",
    title: "The Dream Home · now selling",
    blurb: "4 units of 4-bed terraces · shell ₦230M · finished ₦280M",
    tone: "selling",
  },
  {
    id: "guzape",
    district: "GUZAPE",
    title: "Zenith Terraces",
    blurb: "Delivered 2025 · every key collected",
    tone: "delivered",
  },
  {
    id: "kado",
    district: "KADO",
    title: "Kado Homes",
    blurb: "Sold · one fully detached 7-bed duplex",
    tone: "delivered",
  },
  {
    id: "idu",
    district: "IDU",
    title: "Idu Estate",
    blurb: "Rising · guided site walks for registered buyers",
    tone: "rising",
  },
];
