export interface ContactInterest {
  id: string;
  label: string;
}

export const CONTACT_INTERESTS: ContactInterest[] = [
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
