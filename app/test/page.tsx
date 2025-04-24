import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Component Test Page</h1>

      <div className="grid gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Button Test</h2>
          <div className="flex gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Card Test</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a test card to verify that shadcn/ui components are working correctly.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
