"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, Leaf, MapPin, Calendar, Info, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const gardens = {
  openingHours: [
    { area: "Outdoor Gardens", hours: "5:00 AM - 2:00 AM" },
    { area: "Flower Dome", hours: "9:00 AM - 9:00 PM" },
    { area: "Cloud Forest", hours: "9:00 AM - 9:00 PM" },
    { area: "OCBC Skyway", hours: "9:00 AM - 9:00 PM" },
  ],
  facts: [
    "Gardens by the Bay spans 101 hectares of reclaimed land",
    "The Supertrees range from 25 to 50 meters in height",
    "The Flower Dome is the largest glass greenhouse in the world",
    "Over 1.5 million plants from over 19,000 species are showcased",
  ],
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("history")

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-36 lg:py-44 bg-gradient-to-b from-garden-light to-white leaf-pattern overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute -top-10 -right-10 w-64 h-64 bg-garden-primary/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-20 -left-20 w-80 h-80 bg-garden-secondary/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Floating leaves animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-garden-primary/20"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: -20,
              rotate: Math.random() * 360,
              opacity: 0.3,
            }}
            animate={{
              y: "120vh",
              rotate: Math.random() * 720,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 3,
            }}
          >
            <Leaf size={20 + Math.random() * 30} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left column - intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center p-3 bg-garden-primary/30 rounded-full animate-pulse">
              <Leaf className="h-8 w-8 text-garden-primary" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-garden-primary relative">
              About Gardens by the Bay
              <span className="block w-20 h-1.5 bg-garden-primary rounded-full mx-auto lg:mx-0 mt-4" />
            </h2>

            <p className="text-garden-dark md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gardens by the Bay is a nature park spanning 101 hectares in Singapore's Central Region, adjacent to the
              Marina Reservoir. It comprises three waterfront gardens: Bay South, Bay East and Bay Central.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <MapPin className="h-5 w-5 text-garden-primary" />
                <span className="text-garden-dark font-medium">Singapore</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Calendar className="h-5 w-5 text-garden-primary" />
                <span className="text-garden-dark font-medium">Est. 2012</span>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-12">
              <Image
                src="/images/cloud-forest.png"
                alt="Gardens by the Bay aerial view"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garden-primary/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm">Aerial view of Gardens by the Bay</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Tabs defaultValue="history" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-garden-light/50">
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-garden-primary data-[state=active]:text-green text-garden-dark hover:text-garden-primary"
                >
                  <Info className="h-4 w-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger
                  value="hours"
                  className="data-[state=active]:bg-garden-primary data-[state=active]:text-green text-garden-dark hover:text-garden-primary"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Hours
                </TabsTrigger>
                <TabsTrigger
                  value="facts"
                  className="data-[state=active]:bg-garden-primary data-[state=active]:text-green text-garden-dark hover:text-garden-primary"
                >
                  <Leaf className="h-4 w-4 mr-2" />
                  Facts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-garden-primary group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-garden-light rounded-full group-hover:bg-garden-primary/20 transition-colors">
                      <Leaf className="h-6 w-6 text-garden-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-garden-primary">History</h3>
                  </div>
                  <p className="text-garden-dark leading-relaxed">
                    First announced in 2005 as part of Singapore's "City in a Garden" vision, Gardens by the Bay was
                    designed to be the nation's premier urban outdoor recreation space and a global icon. The gardens
                    officially opened on 29 June 2012 after four years of construction.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative h-48 sm:h-64 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src="/images/floral-fantasy.jpg"
                    alt="Supertree Grove at night"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-garden-primary/80 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-bold">Supertree Grove</h4>
                    <p className="text-white/90 text-sm">Iconic vertical gardens that define the Gardens</p>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="hours">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="shadow-lg overflow-hidden">
                    <CardHeader className="bg-garden-primary text-green px-6 py-5 flex flex-row items-center gap-3">
                      <Clock className="h-6 w-6" />
                      <div>
                        <CardTitle className="text-2xl">Opening Hours</CardTitle>
                        <CardDescription className="text-garden-light/90">Plan your visit</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="bg-white px-6 py-6">
                      <div className="grid gap-4">
                        {gardens.openingHours.map((item, i) => (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            key={i}
                            className="flex justify-between items-center border-b border-garden-light/30 pb-3 last:border-0 hover:bg-garden-light/10 p-2 rounded-lg transition-colors"
                          >
                            <span className="font-medium text-garden-primary flex items-center">
                              <Leaf className="h-4 w-4 mr-2 opacity-70" />
                              {item.area}
                            </span>
                            <span className="text-garden-dark bg-garden-light/30 px-3 py-1 rounded-full text-sm">
                              {item.hours}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-garden-light/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-garden-primary">Last Admission</h4>
                            <p className="text-sm text-garden-dark/70">1 hour before closing time</p>
                          </div>
                          <button className="flex items-center gap-1 text-garden-primary hover:underline text-sm font-medium group">
                            View full schedule
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="facts">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image src="/images/flower-dome.jpg" alt="Flower Dome" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">Fascinating Facts</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-4">
                      {gardens.facts.map((fact, i) => (
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          key={i}
                          className="flex items-start gap-3 group"
                        >
                          <div className="p-1.5 bg-garden-light rounded-full mt-0.5 group-hover:bg-garden-primary/20 transition-colors">
                            <Leaf className="h-4 w-4 text-garden-primary" />
                          </div>
                          <p className="text-garden-dark">{fact}</p>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-garden-light/30 flex justify-end">
                      <button className="flex items-center gap-1 text-garden-primary hover:underline text-sm font-medium group">
                        Learn more about the gardens
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
