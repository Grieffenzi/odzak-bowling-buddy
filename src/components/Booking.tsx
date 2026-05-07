import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Clock, Users, User, Phone } from "lucide-react";

const times = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"];

export function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", players: "4", lane: "1" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Molimo popunite sva polja");
      return;
    }
    toast.success(`Rezervacija primljena!`, {
      description: `${form.name} • ${form.date} u ${form.time} • Staza ${form.lane}`,
    });
    setForm({ name: "", phone: "", date: "", time: "", players: "4", lane: "1" });
  };

  const inputCls =
    "w-full bg-input border border-border rounded-xl px-4 py-3 pl-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <section id="booking" className="py-32 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary mb-4">Booking</p>
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Rezerviši svoju
            <br />
            <span className="text-glow-pink text-primary">stazu</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Odaberi termin koji ti odgovara. Potvrdu rezervacije ćeš dobiti u roku od nekoliko minuta na telefon.
          </p>
          <div className="space-y-4 text-sm">
            {[
              ["Otvoreno", "Pon–Ned • 10:00 — 02:00"],
              ["Lokacija", "Ulica Bowling 1, Odžak"],
              ["Telefon", "+387 31 123 456"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground uppercase tracking-widest text-xs">{k}</span>
                <span className="text-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative p-8 rounded-3xl bg-card border border-border border-glow"
        >
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input className={inputCls} placeholder="Ime i prezime" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input className={inputCls} placeholder="Broj telefona" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="date" className={inputCls} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <select className={inputCls + " appearance-none cursor-pointer"} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                  <option value="">Vrijeme</option>
                  {times.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <select className={inputCls + " appearance-none cursor-pointer"} value={form.players} onChange={(e) => setForm({ ...form, players: e.target.value })}>
                  {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} igrač{n>1?"a":""}</option>)}
                </select>
              </div>
              <div>
                <select className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer" value={form.lane} onChange={(e) => setForm({ ...form, lane: e.target.value })}>
                  {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>Staza {n}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="w-full mt-2 py-4 rounded-xl bg-gradient-hero text-white font-semibold uppercase tracking-widest hover:shadow-neon transition-all">
              Potvrdi rezervaciju
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
