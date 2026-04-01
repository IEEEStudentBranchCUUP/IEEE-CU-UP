import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryCard } from "@/components/GalleryCard";
import { useGallery } from "@/hooks/use-gallery";

export default function Gallery() {
  const { data: galleryItems, isLoading, error } = useGallery();

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow bg-slate-50/50">
        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container-custom">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="font-heading text-4xl font-bold text-foreground">Gallery</h1>
                <p className="mt-2 text-muted-foreground">
                  IEEE CU-UP Student Branch moments from major events and upcoming photo stories.
                </p>
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
          ) : !galleryItems || galleryItems.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              No gallery items found yet.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item) => (
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
