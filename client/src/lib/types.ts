export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "upcoming" | "past" | "all";
  location?: string;
  imageUrl?: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  category: "faculty" | "core";
  imageUrl?: string | null;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface GalleryItem {
  id: number;
  slug?: string;
  title: string;
  description: string;
  date: string;
  category: "event" | "workshop" | "seminar" | "activity";
  imageUrl: string;
  location?: string;
  photos?: GalleryPhoto[];
}
