import { Link } from "@tanstack/react-router";
import { Disc3 } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Disc3 className="w-7 h-7 text-primary animate-pulse-neon" />
          <span className="font-display text-2xl tracking-wider">
            KUGLANA <span className="text-primary text-glow-pink">ODŽAK</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#lanes" className="hover:text-foreground transition">Lanes</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#booking" className="hover:text-foreground transition">Booking</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#booking" className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-neon transition-all">
          Book Now
        </a>
      </div>
    </header>
  );
}
