import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { gardens } from "@/data/gardens"

export function Map() {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Find Us</CardTitle>
        <CardDescription>Gardens by the Bay location</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(gardens.location.address)}&zoom=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gardens by the Bay Map"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
