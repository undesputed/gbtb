"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "@/components/Info";
import { Fees } from "@/components/Fees";
import { Map } from "@/components/Map";
import { gardens } from "@/data/gardens";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Leaf,
  MapPin,
  Clock,
  Ticket,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState, useEffect } from "react";
import AboutSection from "./about-section";
import AttractionsSection from "./attraction-section";
import TicketsSection from "./ticket-section";
import EventsSection from "./events-section";



export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header
        className={`sticky top-0 z-40 garden-header text-white transition-all duration-300 ${
          scrolled ? "shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full shadow-md transform hover:scale-105 transition-transform">
              <Image
                src="/images/logo.jpg"
                alt="Gardens by the Bay Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h1 className="text-xl font-bold">Gardens by the Bay</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="transition-colors hover:text-garden-light font-medium relative nav-link"
            >
              About
            </a>
            <a
              href="#attractions"
              className="transition-colors hover:text-garden-light font-medium relative nav-link"
            >
              Attractions
            </a>
            <a
              href="#tickets"
              className="transition-colors hover:text-garden-light font-medium relative nav-link"
            >
              Tickets
            </a>
            <a
              href="#location"
              className="transition-colors hover:text-garden-light font-medium relative nav-link"
            >
              Location
            </a>
            <Button className="bg-white text-garden-primary hover:bg-garden-light hover:text-white transition-colors shadow-md">
              Book Now
            </Button>
          </nav>
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-garden-primary p-4 shadow-lg z-50 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-white hover:text-garden-light font-medium py-2 px-4 rounded hover:bg-garden-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#attractions"
                className="text-white hover:text-garden-light font-medium py-2 px-4 rounded hover:bg-garden-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Attractions
              </a>
              <a
                href="#tickets"
                className="text-white hover:text-garden-light font-medium py-2 px-4 rounded hover:bg-garden-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tickets
              </a>
              <a
                href="#location"
                className="text-white hover:text-garden-light font-medium py-2 px-4 rounded hover:bg-garden-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Location
              </a>
              <Button
                className="bg-white text-garden-primary hover:bg-garden-light hover:text-white w-full transition-colors shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 hero-section bg-[url('/images/flower-dome.jpg')] bg-cover bg-center">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center text-white">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-float drop-shadow-lg">
                  Gardens by the Bay
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl bg-black/30 p-3 rounded-lg backdrop-blur-sm animate-fadeIn">
                  Where Wonder Blooms in the Garden City
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-garden-primary hover:bg-garden-dark text-white shadow-lg transform hover:scale-105 transition-all"
                  >
                    Explore Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-garden-primary shadow-lg transform hover:scale-105 transition-all"
                  >
                    Watch Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-40 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <AboutSection />
        <AttractionsSection gardens={gardens}/>
        <TicketsSection/>
        <EventsSection/>

        <section
          id="location"
          className="w-full py-16 md:py-24 lg:py-32 bg-night-gradient text-white relative"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4 animate-pulse">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl section-title">
                  Location & Information
                </h2>
                <p className="mx-auto max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-8">
                  Find us and learn more about our facilities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-1 lg:grid-cols-2 w-full lg:gap-12">
              <Info />
              <Map />
            </div>
          </div>
          <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        </section>
      </main>
      <footer className="bg-garden-dark text-black">
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded-full">
                  <Image
                    src="/images/logo.jpg"
                    alt="Gardens by the Bay Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <span className="text-lg font-bold">Gardens by the Bay</span>
              </div>
              <p className="text-black/70 max-w-md">
                Gardens by the Bay is a nature park spanning 101 hectares in the
                Central Region of Singapore, adjacent to the Marina Reservoir.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-black/70 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-black/70 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-black/70 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-garden-gold mb-2 border-b border-garden-gold/30 pb-2">
                Visit
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#about"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> About
                </a>
                <a
                  href="#attractions"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Attractions
                </a>
                <a
                  href="#tickets"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Tickets
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-garden-gold mb-2 border-b border-garden-gold/30 pb-2">
                Connect
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Facebook
                </a>
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Twitter
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-garden-gold mb-2 border-b border-garden-gold/30 pb-2">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-black/70 hover:text-white hover:underline transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" /> Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 mt-8 pt-8 text-center md:text-left">
            <p className="text-sm text-black/50">
              © {new Date().getFullYear()} Gardens by the Bay. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
