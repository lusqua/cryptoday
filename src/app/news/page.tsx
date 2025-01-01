"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLatestNews } from "@/hooks/useLatestNews";
import { NewsHeader } from "@/components/NewsHeader";

export default function NewsPage() {
  const { news, error } = useLatestNews();

  return (
    <main className="container mx-auto p-4 space-y-6">
      <NewsHeader />

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid gap-6">
          {news.map((item, index) => (
            <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{item.category}</p>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{item.timeAgo}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF94] hover:underline"
                  >
                    Ler notícia →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
