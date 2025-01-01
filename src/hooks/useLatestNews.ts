'use client'

import { useState, useEffect } from 'react'

interface NewsItem {
  title: string
  description: string
  category: string
  timeAgo: string
  url: string
  body: string
}

const getStoredNews = () => {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem('latestNews')
    if (stored) {
      const { news } = JSON.parse(stored)
      return news
    }
  } catch (err) {
    console.error('Failed to parse stored news:', err)
  }
  
  return []
}

export function useLatestNews(limit: number = 5) {
  const [news, setNews] = useState<NewsItem[]>(getStoredNews())
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=latest')
        const data = await response.json()

        const newsItems = data.Data.slice(0, limit).map((item: any) => ({
          title: item.title,
          description: item.body.slice(0, 150) + '...',
          category: item.categories,
          timeAgo: new Date(item.published_on * 1000).toLocaleString(),
          url: item.url,
          body: item.body
        }))

        setNews(newsItems)
        if (typeof window !== 'undefined') {
          localStorage.setItem('latestNews', JSON.stringify({
            news: newsItems,
            timestamp: new Date().toISOString()
          }))
        }
      } catch (err) {
        // Se falhar, tenta pegar do cache
        if (typeof window !== 'undefined') {
          const cached = localStorage.getItem('latestNews')
          if (cached) {
            const { news: cachedNews, timestamp } = JSON.parse(cached)
            const cacheAge = new Date().getTime() - new Date(timestamp).getTime()

            // Usa cache se tiver menos de 5 minutos
            if (cacheAge < 300000) {
              setNews(cachedNews)
              return
            }
          }
        }

        setError('Failed to fetch news')
        console.error(err)
      }
    }

    fetchNews()
    // Atualiza a cada 5 minutos
    const interval = setInterval(fetchNews, 300000)

    return () => clearInterval(interval)
  }, [limit])

  return { news, error }
}


