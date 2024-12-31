'use client'

import { useState, useEffect } from 'react'

interface TechnicalIndicators {
  rsi: number
  macd: number
  isAbove200MA: boolean
  lastUpdated: string
}

const initialData: TechnicalIndicators = {
  rsi: 0,
  macd: 0,
  isAbove200MA: false,
  lastUpdated: new Date().toLocaleString()
}

export function useIndicators(apiKey: string) {
  const [data, setData] = useState<TechnicalIndicators>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('technicalIndicators')
      return saved ? JSON.parse(saved) : initialData
    }
    return initialData
  })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIndicators = async () => {
      try {
        // Fetch RSI
        const rsiResponse = await fetch(
          `https://api.taapi.io/rsi?secret=${apiKey}&exchange=bitstamp&symbol=BTC/USD&interval=1h`
        )
        const rsiData = await rsiResponse.json()

        // Fetch MACD
        const macdResponse = await fetch(
          `https://api.taapi.io/macd?secret=${apiKey}&exchange=bitstamp&symbol=BTC/USD&interval=1h`
        )
        const macdData = await macdResponse.json()

        // Fetch 200 MA and current price
        const maResponse = await fetch(
          `https://api.taapi.io/sma?secret=${apiKey}&exchange=bitstamp&symbol=BTC/USD&interval=1d&period=200`
        )
        const maData = await maResponse.json()
        
        const priceResponse = await fetch('https://www.bitstamp.net/api/v2/ticker/btcusd/')
        const priceData = await priceResponse.json()
        const currentPrice = parseFloat(priceData.last)

        const newData = {
          rsi: rsiData.value,
          macd: macdData.valueMACD,
          isAbove200MA: currentPrice > maData.value,
          lastUpdated: new Date().toLocaleString()
        }

        setData(newData)
        localStorage.setItem('technicalIndicators', JSON.stringify(newData))
      } catch (err) {
        setError('Failed to fetch indicators')
        console.error(err)
      }
    }

    if (apiKey) {
      fetchIndicators()
      // Update every 5 minutes to avoid hitting API limits
      const interval = setInterval(fetchIndicators, 300000)
      return () => clearInterval(interval)
    }
  }, [apiKey])

  return { data, error }
} 