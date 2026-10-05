import type { LeadershipOrg } from "@/types";

export const leadership: { intro: string; organizations: LeadershipOrg[] } = {
  intro:
    "Alongside engineering, a large part of my university experience has been organizing people, coordinating volunteer teams, and leading public health advocacy initiatives that extend beyond campus walls.",
  organizations: [
    {
      key: "jzt-nutech",
      role: "President / Chapter Coordinator",
      organization: "JZT NUTECH",
      fullName: "Jehad for Zero Thalassemia — NUTECH Chapter",
      website: "https://jztpakistan.org/",
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Led the JZT chapter at NUTECH — organizing campus-wide blood screening drives, raising public awareness regarding genetic prevention of Thalassemia, and connecting student volunteers with healthcare professionals.",
      galleryTitle: "Moments from JZT NUTECH",
      gallery: [
        {
          image: "/leadership/jzt-1.jpeg",
          caption: "Thalassemia awareness session in lecture halls for students",
        },
        {
          image: "/leadership/jzt-2.jpg",
          caption: "Visiting and spending time with Thalassemia patients at Sundas Foundation, Islamabad",
        },
        {
          image: "/leadership/jzt-3.jpeg",
          caption: "Plantation drive and awareness campaign on university campus",
        },
      ],
    },
    {
      key: "gyfha-nutech",
      role: "President",
      organization: "GYFHA NUTECH Local Council",
      fullName: "Global Youth Forum for Health and Awareness — NUTECH Local Council",
      website: null,
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Presided over a 39-member student council across Event Management, Media, Drama, and Design departments. Executed major awareness seminars in formal collaboration with the Higher Education Commission (HEC) and the Ministry of Health, Pakistan.",
      galleryTitle: "Moments from GYFHA NUTECH",
      gallery: [],
    },
    {
      key: "jzt-taxila",
      role: "Taxila City Coordinator",
      organization: "JZT Pakistan",
      fullName: "Jehad for Zero Thalassemia — Taxila City Coordination",
      website: "https://jztpakistan.org/",
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Coordinating JZT Pakistan's regional activities in Taxila — connecting regional healthcare volunteers with screening campaigns and diagnostic centers.",
      galleryTitle: "Moments from JZT Taxila",
      gallery: [],
    },
  ],
};
