export interface SupportTier {
  id: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
}

export const supportTiers: SupportTier[] = [
  {
    id: "seeker",
    name: "The Seeker",
    price: "$5 / month",
    description: "Support the ongoing creation of dispatches, essays, and poetry.",
    benefits: [
      "Access to full Member Portal",
      "Unlimited reflection reaction lengths",
      "Monthly sanctuary dispatches",
    ],
  },
  {
    id: "pilgrim",
    name: "The Pilgrim",
    price: "$15 / month",
    description: "Deep support for visual art, sacred geometry studies, and comics.",
    benefits: [
      "All Seeker benefits",
      "High-res digital artwork downloads",
      "Early preview of comic chapters & art pieces",
    ],
  },
];
