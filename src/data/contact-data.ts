export interface ContactInterest {
  id: string;
  label: string;
}

export const CONTACT_INTERESTS: ContactInterest[] = [
  { id: "jahi", label: "The Dream Home, Jahi · now selling" },
  { id: "kado", label: "Kado Homes · now selling" },
  { id: "idu", label: "Idu Estate · register interest" },
  { id: "guzape", label: "Guzape Terraces · waitlist" },
  { id: "payment-plans", label: "Payment plans" },
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
    blurb: "Delivered · visits by arrangement with residents' consent",
    tone: "delivered",
  },
  {
    id: "kado",
    district: "KADO",
    title: "Kado Homes · show apartment open",
    blurb: "Now selling · book a weekend viewing slot",
    tone: "selling",
  },
  {
    id: "idu",
    district: "IDU",
    title: "Idu Estate",
    blurb: "Rising · guided site walks for registered buyers",
    tone: "rising",
  },
];
