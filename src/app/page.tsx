import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechnicalIndicators } from "@/components/TechnicalIndicators";
import { NewsSection } from "@/components/NewsSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <Header />
      <HeroSection />
      <TechnicalIndicators />
      <NewsSection />
    </main>
  );
}
