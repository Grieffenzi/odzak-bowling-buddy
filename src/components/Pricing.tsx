const tiers = [
  { name: "Day Strike", time: "10:00 — 17:00", price: "15", unit: "KM / sat", perks: ["Po stazi", "Do 6 igrača", "Iznajmljivanje cipela uključeno"] },
  { name: "Prime Time", time: "17:00 — 22:00", price: "25", unit: "KM / sat", featured: true, perks: ["Po stazi", "Do 6 igrača", "Welcome piće", "Cipele uključene"] },
  { name: "Night Glow", time: "22:00 — 02:00", price: "35", unit: "KM / sat", perks: ["UV neon mod", "DJ atmosfera", "Cocktail special", "Do 8 igrača"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary mb-4">Cjenovnik</p>
          <h2 className="font-display text-5xl md:text-7xl">Izaberi svoj termin</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
                t.featured
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary shadow-neon"
                  : "bg-card border-border hover:border-secondary/50"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold">
                  Najpopularnije
                </span>
              )}
              <h3 className="font-display text-3xl mb-1">{t.name}</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{t.time}</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-6xl text-glow-pink">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.unit}</span>
              </div>
              <ul className="space-y-3 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
