// Define types for the attractions data
interface Attraction {
    name: string
    shortDescription: string
    image: string
    category?: string
    isPopular?: boolean
    location?: string
    hours?: string
    fee?: string
  }
  
  interface GardensData {
    attractions: Attraction[]
    // Other data properties...
  }
  