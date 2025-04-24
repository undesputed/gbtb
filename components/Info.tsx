import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { gardens } from "@/data/gardens"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

export function Info() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Garden Information</CardTitle>
        <CardDescription>Key details about Gardens by the Bay</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <h3 className="font-semibold">Address</h3>
          <p className="text-sm text-muted-foreground">{gardens.location.address}</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm text-muted-foreground">Phone: {gardens.contact.phone}</p>
          <p className="text-sm text-muted-foreground">Email: {gardens.contact.email}</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Features</h3>
          <ul className="grid gap-1 text-sm text-muted-foreground">
            {gardens.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Accessibility</h3>
          <ul className="grid gap-1 text-sm text-muted-foreground">
            {gardens.accessibility.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
