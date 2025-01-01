"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLatestNews } from "@/hooks/useLatestNews";
import { useParams } from "next/navigation";

export default function NewsDetail() {
  const params = useParams();
  const id = params.id as string;

  const { news } = useLatestNews();
  const newsItem = news[parseInt(id)];

  const header = () => {
    return (
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>
      </div>
    );
  };

  if (!newsItem) {
    return (
      <main className="container mx-auto p-4">
        {header()}
        <p>Notícia não encontrada</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      {header()}

      <div className="space-y-6">
        <span>{newsItem.category}</span>
        <div>
          <h1 className="text-2xl font-bold mb-2">{newsItem.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{newsItem.timeAgo}</span>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">{newsItem.body}</p>

        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#00FF94] hover:underline"
        >
          Ler notícia original
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}
