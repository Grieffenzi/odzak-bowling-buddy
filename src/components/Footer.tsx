import { Disc3, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 py-12 bg-card/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Disc3 className="w-6 h-6 text-primary" />
          <span className="font-display text-xl tracking-wider">
            KUGLANA <span className="text-primary">ODŽAK</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Kuglana Odžak. Sva prava pridržana.</p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"><Facebook className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
