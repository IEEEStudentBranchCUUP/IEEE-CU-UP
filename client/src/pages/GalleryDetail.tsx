import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, ImageOff, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getGalleryEvent } from "@/lib/gallery-data";

const placeholderTiles = [
  "Awaiting inauguration photo 01",
  "Awaiting inauguration photo 02",
  "Awaiting inauguration photo 03",
  "Awaiting inauguration photo 04",
];

export default function GalleryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getGalleryEvent(slug) : undefined;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow bg-slate-50/50">
        {!event ? (
          <section className="container-custom py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Gallery</p>
            <h1 className="mt-3 text-3xl font-bold text-foreground">Event not found</h1>
            <p className="mt-3 text-muted-foreground">The inauguration page is ready, but the requested album slug does not exist yet.</p>
            <Button asChild className="mt-6">
              <Link href="/gallery">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>
          </section>
        ) : (
          <>
            <section className="border-b border-slate-200 bg-white py-16">
              <div className="container-custom grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div>
                  <Button asChild variant="outline" className="mb-6">
                    <Link href="/gallery">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Gallery
                    </Link>
                  </Button>

                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Featured inauguration</p>
                  <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">{event.title}</h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{event.description}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Calendar className="h-4 w-4 text-primary" />
                        Date
                      </div>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        {format(new Date(event.date), "MMM d, yyyy")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <MapPin className="h-4 w-4 text-primary" />
                        Venue
                      </div>
                      <p className="mt-2 text-lg font-semibold text-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Album cover</p>
                    <p className="mt-1 text-lg font-semibold">IEEE CU-UP SB Inauguration</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="container-custom py-14">
              <div className="grid gap-6 lg:grid-cols-3">
                {event.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">Highlight</p>
                    <p className="mt-3 text-base leading-7 text-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">Photo gallery</p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground">Photos will be added here</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      The page structure is ready. Once you send the inauguration photos, they can be dropped into this section
                      without changing the route or card flow.
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                    {event.photos.length} uploaded
                  </div>
                </div>

                {event.photos.length > 0 ? (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {event.photos.map((photo) => (
                      <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover" />
                        {photo.caption && <figcaption className="p-4 text-sm text-muted-foreground">{photo.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {placeholderTiles.map((tile) => (
                      <div
                        key={tile}
                        className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-500"
                      >
                        <div className="space-y-3 px-4">
                          <ImageOff className="mx-auto h-10 w-10 text-slate-400" />
                          <p>{tile}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}