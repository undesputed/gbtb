"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Define color schemes for different sections
export const colorSchemes = {
  default: {
    background: "bg-gradient-to-b from-garden-light to-white",
    heading: "text-garden-primary",
    text: "text-garden-dark",
    muted: "text-garden-dark/70",
    accent: "bg-garden-primary text-white",
    accentMuted: "bg-garden-primary/10 text-garden-primary",
    border: "border-garden-primary/10",
    card: "bg-white",
    cardHover: "hover:bg-garden-light/50",
    decoration: "bg-garden-primary/5",
  },
  nature: {
    background: "bg-gradient-to-b from-emerald-50 to-white",
    heading: "text-emerald-700",
    text: "text-emerald-900",
    muted: "text-emerald-700/70",
    accent: "bg-emerald-600 text-white",
    accentMuted: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    card: "bg-white",
    cardHover: "hover:bg-emerald-50",
    decoration: "bg-emerald-100",
  },
  sunset: {
    background: "bg-gradient-to-b from-amber-50 to-white",
    heading: "text-amber-700",
    text: "text-amber-900",
    muted: "text-amber-700/70",
    accent: "bg-amber-600 text-white",
    accentMuted: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    card: "bg-white",
    cardHover: "hover:bg-amber-50",
    decoration: "bg-amber-100",
  },
  water: {
    background: "bg-gradient-to-b from-sky-50 to-white",
    heading: "text-sky-700",
    text: "text-sky-900",
    muted: "text-sky-700/70",
    accent: "bg-sky-600 text-white",
    accentMuted: "bg-sky-100 text-sky-700",
    border: "border-sky-200",
    card: "bg-white",
    cardHover: "hover:bg-sky-50",
    decoration: "bg-sky-100",
  },
  floral: {
    background: "bg-gradient-to-b from-pink-50 to-white",
    heading: "text-pink-700",
    text: "text-pink-900",
    muted: "text-pink-700/70",
    accent: "bg-pink-600 text-white",
    accentMuted: "bg-pink-100 text-pink-700",
    border: "border-pink-200",
    card: "bg-white",
    cardHover: "hover:bg-pink-50",
    decoration: "bg-pink-100",
  },
  earth: {
    background: "bg-gradient-to-b from-amber-100 to-white",
    heading: "text-amber-800",
    text: "text-amber-950",
    muted: "text-amber-800/70",
    accent: "bg-amber-700 text-white",
    accentMuted: "bg-amber-200 text-amber-800",
    border: "border-amber-300",
    card: "bg-white",
    cardHover: "hover:bg-amber-100/50",
    decoration: "bg-amber-200",
  },
}

export type ColorScheme = keyof typeof colorSchemes

interface SectionContainerProps {
  id: string
  children: ReactNode
  colorScheme?: ColorScheme
  className?: string
}

export default function SectionContainer({
  id,
  children,
  colorScheme = "default",
  className,
}: SectionContainerProps) {
  const colors = colorSchemes[colorScheme]

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 relative overflow-hidden",
        colors.background,
        className
      )}
    >
      {/* Decorative elements */}
      <div className={`absolute left-0 top-1/3 w-40 h-40 ${colors.decoration} rounded-full blur-3xl`}></div>
      <div className={`absolute right-0 bottom-1/4 w-60 h-60 ${colors.decoration} rounded-full blur-3xl`}></div>
      <div className={`absolute left-1/4 bottom-0 w-20 h-20 ${colors.decoration} rounded-full blur-2xl`}></div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  )
}

// Helper component for section headers with consistent styling
interface SectionHeaderProps {
  title: string
  description?: string
  badge?: string
  colorScheme?: ColorScheme
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  description, 
  badge, 
  colorScheme = "default",
  centered = true 
}: SectionHeaderProps) {
  const colors = colorSchemes[colorScheme]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col space-y-4",
        centered ? "items-center justify-center text-center" : "items-start"
      )}
    >
      {badge && (
        <span className={cn("px-3 py-1 rounded-full text-sm font-medium", colors.accentMuted)}>
          {badge}
        </span>
      )}
      <div className="space-y-2">
        <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-5xl section-title", colors.heading)}>
          {title}
        </h2>
        {description && (
          <p className={cn("mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4", colors.text)}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
