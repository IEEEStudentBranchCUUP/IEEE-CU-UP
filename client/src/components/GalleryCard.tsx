import { Calendar, ImageOff } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/lib/types";

const categoryLabel: Record<GalleryItem["category"], string> = {
  event: "Event",
  workshop: "Workshop",
  seminar: "Seminar",
  activity: "Activity",
};

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <ImageOff className="h-10 w-10" />
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur">
          {categoryLabel[item.category]}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="mr-1.5 h-4 w-4 text-primary" />
          {format(new Date(item.date), "MMM d, yyyy")}
        </div>

        <h3 className="line-clamp-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
