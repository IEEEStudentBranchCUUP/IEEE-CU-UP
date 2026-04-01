import type { GalleryItem, GalleryPhoto } from "@/lib/types";

export interface GalleryDetail extends GalleryItem {
  slug: string;
  location: string;
  highlights: string[];
  photos: GalleryPhoto[];
}

export const galleryEvents: GalleryDetail[] = [
  {
    id: 1,
    slug: "ieee-cu-up-sb-inauguration",
    title: "IEEE CU-UP SB Inauguration",
    description:
      "The first official IEEE CU-UP Student Branch inauguration, introducing the chapter vision, team, and the roadmap for the year ahead.",
    date: "2026-02-12T10:00:00Z",
    category: "event",
    imageUrl: "/images/team/ieeebanner12feb.jpeg",
    location: "Chandigarh University, Uttar Pradesh Campus",
    highlights: [
      "Formal launch of the IEEE CU-UP Student Branch.",
      "Introduction of the student branch vision, goals, and leadership team.",
      "Networking and group moments from the inauguration ceremony.",
    ],
    photos: [
      {
        src: "/images/team/inauguration1.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 1",
      },
      {
        src: "/images/team/inauguration2.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 2",
      },
      {
        src: "/images/team/inauguration3.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 3",
      },
      {
        src: "/images/team/inauguration4.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 4",
      },
      {
        src: "/images/team/inauguration5.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 5",
      },
      {
        src: "/images/inauguration6.jpeg",
        alt: "IEEE CU-UP SB inauguration gathering moment 6",
      },
    ],
  },
  {
    id: 2,
    slug: "annual-grand-meeting-agm-2026",
    title: "Annual Grand Meeting (AGM) 2026",
    description:
      "A major annual IEEE gathering attended by CU-UP Student Branch members to review milestones, align plans, and strengthen community collaboration.",
    date: "2026-02-01T10:00:00Z",
    category: "event",
    imageUrl: "/images/team/AGM4.jpeg",
    location: "Chandigarh University, Uttar Pradesh Campus",
    highlights: [
      "Annual branch-wide strategic review and planning.",
      "Member networking and leadership interaction session.",
      "Event gallery section prepared for AGM photo uploads.",
    ],
    photos: [
      {
        src: "/images/team/AGM1.jpeg",
        alt: "Annual Grand Meeting 2026 photo 1",
      },
      {
        src: "/images/team/AGM2.jpeg",
        alt: "Annual Grand Meeting 2026 photo 2",
      },
      {
        src: "/images/team/AGM3.jpeg",
        alt: "Annual Grand Meeting 2026 photo 3",
      },
      {
        src: "/images/team/AGM4.jpeg",
        alt: "Annual Grand Meeting 2026 photo 4",
      },
      {
        src: "/images/team/AGM5.jpeg",
        alt: "Annual Grand Meeting 2026 photo 5",
      },
    ],
  },
];

export const galleryItems: GalleryItem[] = galleryEvents.map(({ highlights, ...item }) => item);

export function getGalleryEvent(slug: string) {
  return galleryEvents.find((event) => event.slug === slug);
}