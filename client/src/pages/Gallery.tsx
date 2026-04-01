import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryCard } from "@/components/GalleryCard";
import { useGallery } from "@/hooks/use-gallery";

export default function Gallery() {
  const { data: galleryItems, isLoading, error } = useGallery();
  const featuredItem = galleryItems?.[0];

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
                  IEEE CU-UP Student Branch moments from the inauguration and upcoming photo stories.
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
          ) : !featuredItem ? (
            <div className="py-20 text-center text-muted-foreground">
              No gallery items found yet.
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <GalleryCard item={featuredItem} />

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Featured event</p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">IEEE CU-UP SB Inauguration</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  This is the first real gallery entry. The card is live now, and the detailed event page is ready for the
                  final inauguration photos when you share them.
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  Click the card to open the inauguration album page and continue the photo rollout later.
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
