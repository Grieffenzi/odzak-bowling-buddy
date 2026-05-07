import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Lanes } from "@/components/Lanes";
import { Pricing } from "@/components/Pricing";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuglana Odžak — Prva bowling arena u Odžaku" },
      { name: "description", content: "Rezerviši stazu u prvoj modernoj kuglani u Odžaku. Neon glow lanes, cocktail bar i DJ vikendima." },
      { property: "og:title", content: "Kuglana Odžak — Strike the Night" },
      { property: "og:description", content: "Neon bowling, koktel bar i DJ vikendima u srcu Odžaka." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Lanes />
        <Pricing />
        <Booking />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
