import heroImg from "@/assets/hero-bowling.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Kuglana Odžak neon bowling lanes"
        width={1920}
        height={1088}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 60%, oklch(0.72 0.28 350 / 0.25), transparent 60%)" }} />

      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary mb-6 animate-pulse-neon">
          ✦ Prvi u Odžaku ✦
        </p>
        <h1 className="font-display text-7xl md:text-9xl leading-none mb-6">
          STRIKE THE
          <br />
          <span className="bg-gradient-hero bg-clip-text text-transparent">NIGHT</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          Najmodernija kuglana u gradu. Šest staza, neon svjetla, koktel bar i nezaboravne večeri sa prijateljima.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#booking" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:shadow-neon transition-all">
            Rezerviši stazu
          </a>
          <a href="#pricing" className="px-8 py-4 rounded-full border border-border hover:border-secondary hover:text-secondary transition-all uppercase tracking-wider text-sm">
            Pogledaj cijene
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-20 pt-10 border-t border-border/40">
          {[
            ["6", "Staza"],
            ["24/7", "Online booking"],
            ["10+", "Koktela"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-secondary text-glow-cyan">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
