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
    date: "2026-01-18T10:00:00Z",
    category: "event",
    imageUrl: "/images/team/ieeebanner12feb.jpeg",
    location: "Chandigarh University, Uttar Pradesh Campus",
    highlights: [
      "Formal launch of the IEEE CU-UP Student Branch.",
      "Introduction of the student branch vision, goals, and leadership team.",
      "Networking and group moments from the inauguration ceremony.",
    ],
    photos: [],
  },
];

export const galleryItems: GalleryItem[] = galleryEvents.map(({ highlights, ...item }) => item);

export function getGalleryEvent(slug: string) {
  return galleryEvents.find((event) => event.slug === slug);
}