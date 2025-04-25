import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Ticket } from "lucide-react"

export function Fees() {
  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <CardHeader className="bg-white border-b border-garden-primary/10">
        <CardTitle className="text-garden-primary flex items-center gap-2">
          <Ticket className="h-5 w-5" />
          Admission Fees
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <div className="rounded-lg overflow-hidden border border-garden-primary/10">
          <Table>
            <TableHeader className="bg-garden-light">
              <TableRow>
                <TableHead className="text-garden-primary font-bold">Attraction</TableHead>
                <TableHead className="text-garden-primary font-bold">Adult</TableHead>
                <TableHead className="text-garden-primary font-bold">Child (3-12 years)</TableHead>
                <TableHead className="text-garden-primary font-bold">Senior (≥ 60 years)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-garden-light/50">
                <TableCell className="font-medium">Flower Dome</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$8</TableCell>
              </TableRow>
              <TableRow className="hover:bg-garden-light/50">
                <TableCell className="font-medium">Cloud Forest</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$8</TableCell>
              </TableRow>
              <TableRow className="hover:bg-garden-light/50">
                <TableCell className="font-medium">Two Conservatories</TableCell>
                <TableCell>$20</TableCell>
                <TableCell>$12</TableCell>
                <TableCell>$12</TableCell>
              </TableRow>
              <TableRow className="hover:bg-garden-light/50">
                <TableCell className="font-medium">OCBC Skyway</TableCell>
                <TableCell>$8</TableCell>
                <TableCell>$5</TableCell>
                <TableCell>$5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm text-garden-dark/70 italic">
          * Singapore Residents enjoy special rates. Please present valid identification at the ticketing counter.
        </p>
      </CardContent>
    </Card>
  )
}
