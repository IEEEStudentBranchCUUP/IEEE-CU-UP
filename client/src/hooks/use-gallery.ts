import { useQuery } from "@tanstack/react-query";
import type { GalleryItem } from "@/lib/types";

export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await fetch("/data/gallery.json");
      if (!res.ok) throw new Error("Failed to fetch gallery items");
      return res.json() as Promise<GalleryItem[]>;
    },
  });
}
