import { useQuery } from "@tanstack/react-query";
import { galleryItems } from "@/lib/gallery-data";
import type { GalleryItem } from "@/lib/types";

export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      return galleryItems as GalleryItem[];
    },
  });
}
