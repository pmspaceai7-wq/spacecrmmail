"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.12,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getTransitionClasses = () => {
    const base = "transition-all duration-700 ease-out transform"
    if (isVisible) {
      return `${base} opacity-100 translate-y-0 translate-x-0`
    }
    
    switch (direction) {
      case "left":
        return `${base} opacity-0 -translate-x-8`
      case "right":
        return `${base} opacity-0 translate-x-8`
      case "up":
      default:
        return `${base} opacity-0 translate-y-8`
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${getTransitionClasses()} ${className}`}
    >
      {children}
    </div>
  )
}
