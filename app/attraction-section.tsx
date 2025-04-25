"use client"

import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Clock, Info } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionContainer, { SectionHeader, ColorScheme } from "@/components/section-container"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function AttractionsSection({ gardens }: any) {
  const [filter, setFilter] = useState("all")
  const [filteredAttractions, setFilteredAttractions] = useState(gardens.attractions)
  
  // Color scheme for this section
  const colorScheme: ColorScheme = "nature"
  
  // Extract unique categories from attractions
  const categories = ["all", ...new Set(gardens.attractions.map((attraction: { category: any }) => attraction.category || "other"))]
  
  useEffect(() => {
    if (filter === "all") {
      setFilteredAttractions(gardens.attractions)
    } else {
      setFilteredAttractions(gardens.attractions.filter((attraction: { category: string }) => attraction.category === filter))
    }
  }, [filter, gardens.attractions])

  return (
    <SectionContainer id="attractions" colorScheme={colorScheme}>
      <SectionHeader
        title="Main Attractions"
        description="Discover the wonders of Gardens by the Bay, where nature meets architectural marvels"
        badge="Explore & Discover"
        colorScheme={colorScheme}
      />
      
      {/* Category filter tabs */}
      <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mt-12">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-full h-auto bg-emerald-100/50 p-1 rounded-xl">
          {categories.map((category:any) => (
            <TabsTrigger 
              key={category} 
              value={category}
              onClick={() => setFilter(category)}
              className="capitalize data-[state=active]:bg-white data-[state=active]:text-emerald-700"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredAttractions.map((attraction: { image: any; name: any; category: any; isPopular: any; shortDescription: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; hours: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; fee: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="attraction-card group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="card-image relative h-64 overflow-hidden">
              <Image
                src={attraction.image || "/placeholder.svg?height=400&width=600&query=garden attraction"}
                alt={attraction.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-700/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Explore this attraction
                </span>
                <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 mr-2">
                    {attraction.category || "Attraction"}
                  </Badge>
                  {attraction.isPopular && (
                    <Badge className="bg-yellow-400/90 text-emerald-900 hover:bg-yellow-400">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-2 group-hover:text-emerald-600 transition-colors">
                {attraction.name}
              </h3>
              <p className="text-emerald-900/80 mb-4">
                {attraction.shortDescription}
              </p>
              
              <div className="flex flex-col space-y-2 mb-5">
                {attraction.location && (
                  <div className="flex items-center text-sm text-emerald-900/70">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-600/70" />
                    <span>{attraction.location}</span>
                  </div>
                )}
                {attraction.hours && (
                  <div className="flex items-center text-sm text-emerald-900/70">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600/70" />
                    <span>{attraction.hours}</span>
                  </div>
                )}
                {attraction.fee && (
                  <div className="flex items-center text-sm text-emerald-900/70">
                    <Info className="w-4 h-4 mr-2 text-emerald-600/70" />
                    <span>{attraction.fee}</span>
                  </div>
                )}
              </div>
              
              <Button
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors group"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
