'use client'

import { useState, useEffect } from 'react'

interface BitcoinData {
  price: number
  priceChangePercentage: number
  lastUpdated: string
}

const initialData: BitcoinData = {
  price: 0,
  priceChangePercentage: 0,
  lastUpdated: new Date().toLocaleString()
}

const getStoredBitcoinData = () => {
  if (typeof window === 'undefined') return initialData
  
  try {
    const stored = localStorage.getItem('bitcoinData')
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (err) {
    console.error('Failed to parse stored bitcoin data:', err)
  }
  
  return initialData
}

export function useBitcoinPrice() {
  const [data, setData] = useState<BitcoinData>(getStoredBitcoinData())
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Fetch current price
        const tickerResponse = await fetch('https://www.bitstamp.net/api/v2/ticker/btcusd/')
        const tickerData = await tickerResponse.json()
        
        // Calculate 24h change percentage
        const currentPrice = parseFloat(tickerData.last)
        const openPrice = parseFloat(tickerData.open)
        const changePercentage = ((currentPrice - openPrice) / openPrice) * 100

        const newData = {
          price: currentPrice,
          priceChangePercentage: changePercentage,
          lastUpdated: new Date().toLocaleString()
        }
        
        setData(newData)
        if (typeof window !== 'undefined') {
          localStorage.setItem('bitcoinData', JSON.stringify(newData))
        }
      } catch (err) {
        setError('Failed to fetch Bitcoin price')
        console.error(err)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return { data, error }
} 