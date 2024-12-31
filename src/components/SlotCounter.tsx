'use client'

import { useEffect, useRef, useState } from 'react'

interface SlotCounterProps {
  value: number
  className?: string
}

export function SlotCounter({ value, className = '' }: SlotCounterProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const previousValue = useRef(value)
  const frameRef = useRef(0)

  useEffect(() => {
    if (value === previousValue.current) return

    const startValue = previousValue.current
    const endValue = value
    const duration = 2500 // 2.5 seconds animation
    const startTime = performance.now()
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      setDisplayValue(currentValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    previousValue.current = value

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [value])

  return (
    <span className={`transition-transform ${className}`} style={{ display: 'inline-block' }}>
      ${displayValue.toLocaleString(undefined, { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}
    </span>
  )
} 