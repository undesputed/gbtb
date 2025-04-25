"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Map() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] relative">
      <div
        className={`absolute inset-0 bg-garden-primary/20 flex items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-8 h-8 border-4 border-garden-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8202827513933!2d103.86103827581677!3d1.281573661789763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1904937e1633%3A0x62099677b59fca76!2sGardens%20by%20the%20Bay!5e0!3m2!1sen!2sph!4v1745549083339!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full"
      ></iframe>
      <div className="absolute bottom-4 right-4">
        <Button
          size="sm"
          className="bg-white text-garden-primary hover:bg-garden-gold hover:text-white"
          onClick={() =>
            window.open("https://goo.gl/maps/LZQzqrs5Vk8X8SUMA", "_blank")
          }
        >
          View Larger Map <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
