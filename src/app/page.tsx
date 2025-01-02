"use client";

import { TechnicalIndicators } from "@/components/TechnicalIndicators";
import { NewsSection } from "@/components/NewsSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TradingViewTimeline } from "@/components/TradingViewTimeline";
import { TechnicalAnalytics } from "@/components/TechinicalAnalytics";

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="container mx-auto p-4 space-y-6">
        <Header />
        <HeroSection />
        <TechnicalIndicators />
        <TechnicalAnalytics />
        <NewsSection />
      </main>
    </ProtectedRoute>
  );
}
