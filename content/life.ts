import type { LifeEntry } from "@/types";

export const lifeCategories = [
  "University Memories",
  "Events",
  "Trips",
  "Milestones",
  "Student Life",
  "Hobbies & Interests",
  "Community",
];

export const lifeEntries: LifeEntry[] = [
  {
    id: "nescom-defense-2026",
    date: "August 2026",
    title: "Defending SENTRYX at NESCOM",
    description: "Delivering the live hardware demonstration and defending the 22-page IEEE technical report on CPU-friendly ALPR before the technical evaluation committee.",
    category: "Milestones",
    image: "/projects/alpr-hero.svg",
  },
  {
    id: "sundas-foundation-visit",
    date: "2024",
    title: "Sundas Foundation Patient Visit",
    description: "Spending time with children undergoing regular blood transfusions at Sundas Foundation, F-9 Islamabad, reinforcing the importance of preventative health screening.",
    category: "Community",
    image: "/leadership/jzt-2.jpg",
  },
  {
    id: "hec-health-seminar",
    date: "2024",
    title: "HEC & Ministry of Health Seminar",
    description: "Leading the GYFHA council to organize a national-level health awareness seminar at NUTECH with guest keynote speakers from the medical community.",
    category: "Events",
    image: "/leadership/jzt-1.jpeg",
  },
];

export const lifePlaceholder = {
  title: "This space is continuously updated.",
  description:
    "Life happens between the commits — events, engineering milestones, volunteer campaigns, and moments worth remembering.",
};
