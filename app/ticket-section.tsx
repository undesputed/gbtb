"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Check, Info, Ticket, Users, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionContainer, { SectionHeader, ColorScheme } from "@/components/section-container"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TicketsSection() {
  const [date, setDate] = useState(null)
  const [visitors, setVisitors] = useState({ adults: 2, children: 0, seniors: 0 })
  
  // Color scheme for this section
  const colorScheme: ColorScheme = "water"

  const incrementVisitor = (type) => {
    setVisitors((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }))
  }

  const decrementVisitor = (type) => {
    if (visitors[type] > 0) {
      setVisitors((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }))
    }
  }

  return (
    <SectionContainer id="tickets" colorScheme={colorScheme}>
      <SectionHeader
        title="Tickets & Admission"
        description="Choose from our variety of ticket options to experience the wonders of Gardens by the Bay"
        badge="Plan Your Visit"
        colorScheme={colorScheme}
      />

      <div className="mx-auto max-w-6xl py-12">
        <Tabs defaultValue="standard" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger
                value="standard"
                className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Standard
              </TabsTrigger>
              <TabsTrigger
                value="bundles"
                className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Bundles
              </TabsTrigger>
              <TabsTrigger
                value="annual"
                className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Annual Passes
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="standard" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TicketCard
                title="Flower Dome"
                description="Experience the beauty of plants and flowers from Mediterranean regions"
                price={12}
                features={[
                  "Access to Flower Dome only",
                  "Valid for one-time entry",
                  "Audio guide available (additional fee)",
                  "Free garden shuttle service",
                ]}
                popular={false}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Cloud Forest"
                description="Explore the mysterious world veiled in mist with breathtaking mountain views"
                price={12}
                features={[
                  "Access to Cloud Forest only",
                  "Valid for one-time entry",
                  "Audio guide available (additional fee)",
                  "Free garden shuttle service",
                ]}
                popular={false}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Two Conservatories"
                description="Visit both the Flower Dome and Cloud Forest with our best value ticket"
                price={20}
                features={[
                  "Access to both conservatories",
                  "Valid for one-time entry to each conservatory",
                  "Audio guide available (additional fee)",
                  "Free garden shuttle service",
                ]}
                popular={true}
                colorScheme={colorScheme}
              />
            </div>

            <div className="mt-12">
              <StandardFeesTable colorScheme={colorScheme} />
            </div>
          </TabsContent>

          <TabsContent value="bundles" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TicketCard
                title="Garden Explorer"
                description="The perfect package for first-time visitors"
                price={28}
                features={[
                  "Access to both conservatories",
                  "OCBC Skyway access",
                  "Garden Cruiser tram ride",
                  "Valid for one day",
                ]}
                popular={true}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Premium Experience"
                description="Enjoy all attractions with priority access"
                price={38}
                features={[
                  "Access to both conservatories",
                  "OCBC Skyway access",
                  "Floral Fantasy access",
                  "Supertree Observatory access",
                  "Priority queue at all attractions",
                ]}
                popular={false}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Family Bundle"
                description="Special package for families with children"
                price={68}
                features={[
                  "2 Adult + 2 Child tickets",
                  "Access to both conservatories",
                  "OCBC Skyway access",
                  "Children's Garden access",
                  "10% discount at garden cafes",
                ]}
                popular={false}
                colorScheme={colorScheme}
              />
            </div>
          </TabsContent>

          <TabsContent value="annual" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TicketCard
                title="Friends of the Gardens"
                description="Annual membership for garden enthusiasts"
                price={75}
                features={[
                  "Unlimited access to both conservatories for 1 year",
                  "10% discount at retail shops",
                  "10% discount at F&B outlets",
                  "Priority access to special events",
                  "Quarterly newsletter subscription",
                ]}
                popular={false}
                isAnnual={true}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Family Membership"
                description="Annual pass for the whole family"
                price={180}
                features={[
                  "Covers 2 adults and 2 children",
                  "Unlimited access to both conservatories for 1 year",
                  "15% discount at retail shops",
                  "15% discount at F&B outlets",
                  "Free parking (2 hours daily)",
                  "Exclusive member events",
                ]}
                popular={true}
                isAnnual={true}
                colorScheme={colorScheme}
              />

              <TicketCard
                title="Premium Membership"
                description="The ultimate Gardens by the Bay experience"
                price={250}
                features={[
                  "Unlimited access to all attractions for 1 year",
                  "20% discount at retail shops",
                  "20% discount at F&B outlets",
                  "Free parking (4 hours daily)",
                  "Complimentary guest passes (4 per year)",
                  "VIP access to all events",
                ]}
                popular={false}
                isAnnual={true}
                colorScheme={colorScheme}
              />
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 bg-white rounded-xl shadow-lg border border-sky-200 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 bg-sky-50">
              <h3 className="text-xl font-bold text-sky-700 mb-4">Plan Your Visit</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-sky-200 hover:bg-sky-50"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {date ? date.toDateString() : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">Number of Visitors</label>
                  <div className="space-y-3">
                    <VisitorCounter
                      label="Adults"
                      count={visitors.adults}
                      onIncrement={() => incrementVisitor("adults")}
                      onDecrement={() => decrementVisitor("adults")}
                      colorScheme={colorScheme}
                    />
                    <VisitorCounter
                      label="Children (3-12 years)"
                      count={visitors.children}
                      onIncrement={() => incrementVisitor("children")}
                      onDecrement={() => decrementVisitor("children")}
                      colorScheme={colorScheme}
                    />
                    <VisitorCounter
                      label="Seniors (≥ 60 years)"
                      count={visitors.seniors}
                      onIncrement={() => incrementVisitor("seniors")}
                      onDecrement={() => decrementVisitor("seniors")}
                      colorScheme={colorScheme}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white flex flex-col">
              <h3 className="text-xl font-bold text-sky-700 mb-4">Special Offers</h3>

              <div className="space-y-4 flex-grow">
                <div className="p-4 border border-dashed border-sky-300 rounded-lg bg-sky-50">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sky-700">Early Bird Special</h4>
                      <p className="text-sm text-sky-700/80">20% off all tickets when you visit before 10 AM</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-sky-300 rounded-lg bg-sky-50">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sky-700">Group Discount</h4>
                      <p className="text-sm text-sky-700/80">15% off for groups of 15 or more visitors</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-sky-300 rounded-lg bg-sky-50">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sky-700">Weekday Special</h4>
                      <p className="text-sm text-sky-700/80">10% off all tickets from Monday to Thursday</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-6 bg-sky-600 hover:bg-sky-700 text-white shadow-lg transform hover:scale-105 transition-all"
              >
                Book Tickets Now
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-sky-700 mb-6 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-sky-200">
              <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                Do I need to book tickets in advance?
              </AccordionTrigger>
              <AccordionContent className="text-sky-700/80">
                While walk-in tickets are available, we highly recommend booking your tickets online in advance,
                especially during weekends, public holidays, and school holidays to avoid disappointment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-sky-200">
              <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                Are there any discounts for Singapore residents?
              </AccordionTrigger>
              <AccordionContent className="text-sky-700/80">
                Yes, Singapore residents enjoy special rates for all attractions. Please present a valid
                identification card (NRIC or FIN) at the ticketing counter to enjoy these rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-sky-200">
              <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                Can I use my ticket on any day?
              </AccordionTrigger>
              <AccordionContent className="text-sky-700/80">
                Standard tickets are valid for the selected date only. Annual passes are valid for one year from the
                date of purchase. Please check the specific terms for each ticket type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-sky-200">
              <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                What happens if it rains during my visit?
              </AccordionTrigger>
              <AccordionContent className="text-sky-700/80">
                Most of our attractions, including the Flower Dome and Cloud Forest, are indoor facilities and remain
                open during rain. Outdoor attractions like the OCBC Skyway may close temporarily during inclement
                weather attractions like the OCBC Skyway may close temporarily during inclement weather for safety reasons. In such cases, we may provide alternative options or rain checks depending on the situation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </SectionContainer>
  )
}

function TicketCard({ title, description, price, features, popular, isAnnual = false, colorScheme = "water" }: any) {
  const colors = {
    water: {
      ring: "ring-sky-600",
      border: "border-sky-200",
      title: "text-sky-700",
      description: "text-sky-700/80",
      price: "text-sky-700",
      check: "text-sky-600",
      button: "bg-sky-600 hover:bg-sky-700 text-white",
      buttonOutline: "border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white",
      popular: "bg-sky-600",
    },
    nature: {
      ring: "ring-emerald-600",
      border: "border-emerald-200",
      title: "text-emerald-700",
      description: "text-emerald-700/80",
      price: "text-emerald-700",
      check: "text-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      buttonOutline: "border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",
      popular: "bg-emerald-600",
    },
    sunset: {
      ring: "ring-amber-600",
      border: "border-amber-200",
      title: "text-amber-700",
      description: "text-amber-700/80",
      price: "text-amber-700",
      check: "text-amber-600",
      button: "bg-amber-600 hover:bg-amber-700 text-white",
      buttonOutline: "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
      popular: "bg-amber-600",
    },
    floral: {
      ring: "ring-pink-600",
      border: "border-pink-200",
      title: "text-pink-700",
      description: "text-pink-700/80",
      price: "text-pink-700",
      check: "text-pink-600",
      button: "bg-pink-600 hover:bg-pink-700 text-white",
      buttonOutline: "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white",
      popular: "bg-pink-600",
    },
    earth: {
      ring: "ring-amber-700",
      border: "border-amber-300",
      title: "text-amber-800",
      description: "text-amber-800/80",
      price: "text-amber-800",
      check: "text-amber-700",
      button: "bg-amber-700 hover:bg-amber-800 text-white",
      buttonOutline: "border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white",
      popular: "bg-amber-700",
    },
    default: {
      ring: "ring-garden-primary",
      border: "border-garden-primary/10",
      title: "text-garden-primary",
      description: "text-garden-dark/80",
      price: "text-garden-primary",
      check: "text-garden-primary",
      button: "bg-garden-primary hover:bg-garden-primary/90 text-white",
      buttonOutline: "border-garden-primary text-garden-primary hover:bg-garden-primary hover:text-white",
      popular: "bg-garden-primary",
    },
  }

  const color = colors[colorScheme]

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className={`relative ${popular ? `ring-2 ${color.ring}` : `border ${color.border}`} rounded-xl overflow-hidden shadow-lg bg-white`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className={`${color.popular} text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-4 rotate-45`}>
            POPULAR
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className={`text-xl ${color.title}`}>{title}</CardTitle>
        <CardDescription className={color.description}>{description}</CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="flex items-baseline mb-6">
          <span className={`text-3xl font-bold ${color.price}`}>${price}</span>
          <span className="text-garden-dark/70 ml-1">{isAnnual ? "/year" : "/person"}</span>
        </div>

        <ul className="space-y-2">
          {features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${color.check} shrink-0 mr-2`} />
              <span className="text-sm text-garden-dark/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className={`w-full ${color.button}`}>Select</Button>
      </CardFooter>
    </motion.div>
  )
}

function VisitorCounter({ label, count, onIncrement, onDecrement, colorScheme = "water" }: any) {
  const colors = {
    water: {
      text: "text-sky-900",
      border: "border-sky-200",
    },
    nature: {
      text: "text-emerald-900",
      border: "border-emerald-200",
    },
    sunset: {
      text: "text-amber-900",
      border: "border-amber-200",
    },
    floral: {
      text: "text-pink-900",
      border: "border-pink-200",
    },
    earth: {
      text: "text-amber-950",
      border: "border-amber-300",
    },
    default: {
      text: "text-garden-dark",
      border: "border-garden-primary/20",
    },
  }

  const color = colors[colorScheme]

  return (
    <div className="flex items-center justify-between">
      <span className={color.text}>{label}</span>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className={`h-8 w-8 rounded-full ${color.border}`}
          onClick={onDecrement}
        >
          <span className="sr-only">Decrease</span>
          <span className="text-lg">-</span>
        </Button>
        <span className="w-8 text-center">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className={`h-8 w-8 rounded-full ${color.border}`}
          onClick={onIncrement}
        >
          <span className="sr-only">Increase</span>
          <span className="text-lg">+</span>
        </Button>
      </div>
    </div>
  )
}

function StandardFeesTable({ colorScheme = "water" }) {
  const colors = {
    water: {
      title: "text-sky-700",
      border: "border-sky-200",
      header: "bg-sky-50",
      headerText: "text-sky-700",
      hover: "hover:bg-sky-50",
      text: "text-sky-700/70",
    },
    nature: {
      title: "text-emerald-700",
      border: "border-emerald-200",
      header: "bg-emerald-50",
      headerText: "text-emerald-700",
      hover: "hover:bg-emerald-50",
      text: "text-emerald-700/70",
    },
    sunset: {
      title: "text-amber-700",
      border: "border-amber-200",
      header: "bg-amber-50",
      headerText: "text-amber-700",
      hover: "hover:bg-amber-50",
      text: "text-amber-700/70",
    },
    floral: {
      title: "text-pink-700",
      border: "border-pink-200",
      header: "bg-pink-50",
      headerText: "text-pink-700",
      hover: "hover:bg-pink-50",
      text: "text-pink-700/70",
    },
    earth: {
      title: "text-amber-800",
      border: "border-amber-300",
      header: "bg-amber-100",
      headerText: "text-amber-800",
      hover: "hover:bg-amber-50",
      text: "text-amber-800/70",
    },
    default: {
      title: "text-garden-primary",
      border: "border-garden-primary/10",
      header: "bg-garden-light",
      headerText: "text-garden-primary",
      hover: "hover:bg-garden-light/50",
      text: "text-garden-dark/70",
    },
  }

  const color = colors[colorScheme]

  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <CardHeader className={`bg-white border-b ${color.border}`}>
        <CardTitle className={`${color.title} flex items-center gap-2`}>
          <Ticket className="h-5 w-5" />
          Standard Admission Fees
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <div className={`rounded-lg overflow-hidden border ${color.border}`}>
          <Table>
            <TableHeader className={color.header}>
              <TableRow>
                <TableHead className={`${color.headerText} font-bold`}>Attraction</TableHead>
                <TableHead className={`${color.headerText} font-bold`}>Adult</TableHead>
                <TableHead className={`${color.headerText} font-bold`}>Child (3-12 years)</TableHead>
                <TableHead className={`${color.headerText} font-bold`}>Senior (≥ 60 years)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className={color.hover}>
                <TableCell className="font-medium">Flower Dome</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$8</TableCell>
              </TableRow>
              <TableRow className={color.hover}>
                <TableCell className="font-medium">Cloud Forest</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$8</TableCell>
              </TableRow>
              <TableRow className={color.hover}>
                <TableCell className="font-medium">Two Conservatories</TableCell>
                <TableCell>$20</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$12</TableCell>
              </TableRow>
              <TableRow className={color.hover}>
                <TableCell className="font-medium">OCBC Skyway</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$5</TableCell>
                <TableCell>$5</TableCell>
              </TableRow>
              <TableRow className={color.hover}>
                <TableCell className="font-medium">Floral Fantasy</TableCell>
                <TableCell>$10</TableCell>
                <TableCell>$6</TableCell>
                <TableCell>$6</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-start gap-2">
          <Info className={`h-4 w-4 ${color.text} mt-0.5 shrink-0`} />
          <p className={`text-sm ${color.text} italic`}>
            Singapore Residents enjoy special rates. Please present valid identification at the ticketing counter.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
