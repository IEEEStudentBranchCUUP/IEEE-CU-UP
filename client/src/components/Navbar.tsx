import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Members", href: "/members" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "https://python008-dev.github.io/ieee_gallery/", external: true }, // Added external flag
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Function to check if link is external
  const isExternalLink = (href) => {
    return href.startsWith('http') || href.startsWith('https');
  };

  return (
    <header className="top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-full px-0 md:px-4 lg:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <img 
              src="https://image2url.com/r2/default/images/1769060082997-431bbd82-feba-45f6-8ee4-3f381c9e6313.jpg" 
              alt="CU Logo" 
              className="h-12 w-auto md:h-16" 
            />
            <img 
              src="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/IEEE-CU-Logo-Official-imagetourl.cloud-1768544558737-myd2ju.jpg" 
              alt="IEEE Logo" 
              className="h-12 w-auto md:h-16 ml-1 md:ml-2" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center mr-0">
          {navItems.map((item) => {
            // Check if it's an external link
            if (isExternalLink(item.href)) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                    "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              );
            } else {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                    location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
          })}
          <Link href="/join" className="ml-1">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-sm whitespace-nowrap px-4">
              Join IEEE
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground mr-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden border-t bg-background w-full">
          <div className="w-full px-4 py-4 flex flex-col">
            {navItems.map((item) => {
              if (isExternalLink(item.href)) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "py-3 text-base font-medium transition-colors border-b border-gray-100 last:border-0",
                      "text-muted-foreground hover:text-primary"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "py-3 text-base font-medium transition-colors border-b border-gray-100 last:border-0",
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
            <div className="mt-4">
              <Link href="/join" onClick={() => setIsMobileOpen(false)}>
                <Button className="w-full bg-primary text-white py-5">
                  Join IEEE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
