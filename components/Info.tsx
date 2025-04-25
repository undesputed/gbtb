import { Mail, Phone, Globe, Clock } from "lucide-react"

export function Info() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-garden-gold">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-garden-gold mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-white/80">feedback@gardensbythebay.com.sg</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-garden-gold mt-1" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-white/80">+65 6420 6848</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="h-5 w-5 text-garden-gold mt-1" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-white/80">18 Marina Gardens Drive, Singapore 018953</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-garden-gold mt-1" />
          <div>
            <p className="font-medium">Customer Service</p>
            <p className="text-white/80">9:00 AM - 9:00 PM (Daily)</p>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-white/20">
        <h4 className="font-medium mb-2">Getting Here</h4>
        <div className="space-y-2 text-sm text-white/80">
          <p>
            <span className="text-garden-gold font-medium">MRT:</span> Bayfront Station (Circle Line & Downtown Line)
          </p>
          <p>
            <span className="text-garden-gold font-medium">Bus:</span> Services 400, 402
          </p>
          <p>
            <span className="text-garden-gold font-medium">Car:</span> Underground parking available
          </p>
        </div>
      </div>
    </div>
  )
}
