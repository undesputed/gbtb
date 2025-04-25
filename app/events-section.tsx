"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionContainer, { SectionHeader, type ColorScheme } from "@/components/section-container"

const events = [
  {
    id: 1,
    title: "Garden Rhapsody Light Show",
    date: "Daily",
    time: "7:45 PM & 8:45 PM",
    location: "Supertree Grove",
    image: "/images/supertree-grove.jpg",
    category: "shows",
    description: "Experience a dazzling light and sound show amidst the Supertrees.",
  },
  {
    id: 2,
    title: "Sakura Matsuri",
    date: "Mar 15 - Apr 10, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Flower Dome",
    image: "/images/flower-dome.jpg",
    category: "seasonal",
    description: "Annual cherry blossom display featuring Japanese cultural elements.",
  },
  {
    id: 3,
    title: "Mid-Autumn Festival",
    date: "Sep 10 - Oct 3, 2024",
    time: "9:00 AM - 10:00 PM",
    location: "Gardens by the Bay",
    image: "/images/childrens-garden.jpg",
    category: "seasonal",
    description: "Spectacular lantern displays throughout the gardens.",
  },
  {
    id: 4,
    title: "Guided Garden Tour",
    date: "Every Sat & Sun",
    time: "10:00 AM & 2:00 PM",
    location: "Visitor Center",
    image: "/images/floral-fantasy.jpg",
    category: "tours",
    description: "Expert-led tours exploring the highlights of Gardens by the Bay.",
  },
  {
    id: 5,
    title: "Orchid Extravaganza",
    date: "Jul 8 - Aug 28, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Cloud Forest",
    image: "/images/floral-fantasy.jpg",
    category: "exhibitions",
    description: "A stunning display featuring thousands of orchids in creative arrangements.",
  },
  {
    id: 6,
    title: "Photography Workshop",
    date: "Last Sunday of each month",
    time: "8:00 AM - 11:00 AM",
    location: "Flower Dome",
    image: "/images/flower-dome.jpg",
    category: "workshops",
    description: "Learn to capture the beauty of nature with professional photographers.",
  },
]

export default function EventsSection() {
  const [filter, setFilter] = useState("all")
  const [filteredEvents, setFilteredEvents] = useState(events)

  // Color scheme for this section
  const colorScheme: ColorScheme = "sunset"

  // Extract unique categories from events
  const categories = ["all", ...new Set(events.map((event) => event.category))]

  const handleFilterChange = (category:any ) => {
    setFilter(category)
    if (category === "all") {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((event) => event.category === category))
    }
  }

  return (
    <SectionContainer id="events" colorScheme={colorScheme}>
      <SectionHeader
        title="Events & Happenings"
        description="Discover exciting events and activities at Gardens by the Bay"
        badge="What's On"
        colorScheme={colorScheme}
      />

      {/* Category filter tabs */}
      <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mt-12">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full h-auto bg-pink-100/50 p-1 rounded-xl">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => handleFilterChange(category)}
              className="capitalize data-[state=active]:bg-white data-[state=active]:text-pink-700"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} colorScheme={colorScheme} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="default" className="bg-pink-600 hover:bg-pink-700 text-white px-8">
          View All Events
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionContainer>
  )
}

function EventCard({ event, colorScheme }:any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden border-pink-200 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-pink-600 hover:bg-pink-700 text-white capitalize">{event.category}</Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold text-pink-700 mb-2 group-hover:text-pink-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-pink-900/80 mb-4 line-clamp-2">{event.description}</p>

          <div className="flex flex-col space-y-2 mb-5 text-sm">
            <div className="flex items-center text-pink-900/70">
              <Calendar className="w-4 h-4 mr-2 text-pink-600/70" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-pink-900/70">
              <Clock className="w-4 h-4 mr-2 text-pink-600/70" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-pink-900/70">
              <MapPin className="w-4 h-4 mr-2 text-pink-600/70" />
              <span>{event.location}</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
          >
            Event Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
