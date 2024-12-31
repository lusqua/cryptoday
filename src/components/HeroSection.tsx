'use client'

import { useBitcoinPrice } from "@/hooks/useBitcoinPrice"
import { SlotCounter } from "./SlotCounter"

export function HeroSection() {
  const { data, error } = useBitcoinPrice()

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {/* <h1 className="text-4xl font-bold mb-2">Bitcoin</h1> */}
      <div className="flex items-center gap-3 mb-4">
        <SlotCounter 
          value={data.price} 
          className="text-5xl md:text-6xl font-bold text-[#00FF94]"
        />
        <span className={`text-lg ${data.priceChangePercentage >= 0 ? 'text-[#00FF94]' : 'text-red-500'}`}>
          {data.priceChangePercentage >= 0 ? '+' : ''}{data.priceChangePercentage.toFixed(2)}%
        </span>
      </div>
      <p className="text-gray-400">Last updated: {data.lastUpdated}</p>
      {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
    </div>
  )
} 