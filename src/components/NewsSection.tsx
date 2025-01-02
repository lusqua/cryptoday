import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLatestNews } from "@/hooks/useLatestNews";
import { ArrowRight, Newspaper, TrendingDown, TrendingUp } from "lucide-react";
import { NewsList } from "./newsList";
import Link from "next/link";
import { TradingViewTimeline } from "./TradingViewTimeline";

const news = [
  {
    title: "Bitcoin Breaks Above $65,000 as Market Sentiment Improves",
    summary:
      "Major cryptocurrency sees significant gains amid positive market outlook",
    impact: "Alto",
    sentiment: "positive",
  },
  {
    title: "New Regulatory Framework Proposed for Crypto Trading",
    summary:
      "Government officials announce plans for comprehensive crypto regulations",
    impact: "Médio",
    sentiment: "neutral",
  },
  {
    title: "Major Institution Announces Bitcoin Investment",
    summary: "Leading financial firm adds BTC to corporate treasury",
    impact: "Alto",
    sentiment: "positive",
  },
];

export function NewsSection() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Últimas Notícias
          </div>
          {/* <Link
            href="/news"
            className="text-xs text-[#00FF94] hover:underline flex items-center gap-1"
          >
            Ver todas
            <ArrowRight className="h-3 w-3" />
          </Link> */}
        </CardTitle>
      </CardHeader>
      <CardContent className=" h-[550px]">
        <div className="space-y-4">
          <TradingViewTimeline />
          {/* <NewsList /> */}
          {/* {news.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
              <div
                className={`flex flex-col items-center justify-center ${
                  item.sentiment === 'positive'
                    ? 'text-green-500'
                    : item.sentiment === 'negative'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
                {item.sentiment === 'positive' ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">{item.impact}</span>
              </div>
            </div>
          ))} */}
        </div>
      </CardContent>
    </Card>
  );
}
