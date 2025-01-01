"use client";

import { useLatestNews } from "@/hooks/useLatestNews";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NewsList() {
  const { news, error } = useLatestNews();

  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="flex-1">
            <Link 
              href={`/news/${index}`}
              className="group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-[#00FF94] transition-colors">
                {item.title}
              </h3>
            </Link>
            {/* <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {item.description}
            </p> */}
            <div className="flex items-center gap-2">
              <Link 
                href={`/news/${index}`}
                className="text-xs text-[#00FF94] hover:underline flex items-center gap-1"
              >
                Ler notícia
                <ArrowRight className="h-3 w-3" />
              </Link>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{item.timeAgo}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
