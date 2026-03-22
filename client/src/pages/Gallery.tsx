import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GalleryCard } from "@/components/GalleryCard";
import { useGallery } from "@/hooks/use-gallery";
import type { GalleryItem } from "@/lib/types";

type GalleryFilter = "all" | GalleryItem["category"];

const filters: { label: string; value: GalleryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Events", value: "event" },
  { label: "Workshops", value: "workshop" },
  { label: "Seminars", value: "seminar" },
  { label: "Activities", value: "activity" },
];

export default function Gallery() {
  const { data: galleryItems, isLoading, error } = useGallery();
  const [filter, setFilter] = useState<GalleryFilter>("all");

  const filteredItems = useMemo(() => {
    if (!galleryItems) return [];
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [galleryItems, filter]);

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow bg-slate-50/50">
        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container-custom">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="font-heading text-4xl font-bold text-foreground">Gallery</h1>
                <p className="mt-2 text-muted-foreground">
                  IEEE Student Branch moments from events, workshops, seminars, and campus activities.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 rounded-lg bg-slate-100 p-1">
                {filters.map((item) => (
                  <Button
                    key={item.value}
                    size="sm"
                    variant={filter === item.value ? "default" : "ghost"}
                    className={
                      filter === item.value
                        ? "bg-white text-primary shadow-sm hover:bg-white"
                        : "text-muted-foreground hover:text-foreground"
                    }
                    onClick={() => setFilter(item.value)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom py-14">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="py-20 text-center text-destructive">
              Failed to load gallery items. Please try again later.
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              No gallery items found in this category.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
