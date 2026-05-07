import { Sparkles, Users, Music, Wine } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Glow Lanes", desc: "Neon osvjetljenje i UV efekti za nezaboravnu atmosferu." },
  { icon: Users, title: "Grupe & Eventi", desc: "Idealno za rođendane, firme i momačke večeri." },
  { icon: Music, title: "DJ Vikendima", desc: "Live DJ setovi svakog petka i subote uveče." },
  { icon: Wine, title: "Cocktail Bar", desc: "Vrhunski koktel bar sa lokalnim i svjetskim brendovima." },
];

export function Lanes() {
  return (
    <section id="lanes" className="py-32 container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary mb-4">Iskustvo</p>
        <h2 className="font-display text-5xl md:text-7xl">Više od kuglanja</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle at top, oklch(0.72 0.28 350 / 0.15), transparent 70%)" }} />
            <Icon className="relative w-10 h-10 text-primary mb-4 animate-pulse-neon" />
            <h3 className="relative font-display text-2xl mb-2">{title}</h3>
            <p className="relative text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
