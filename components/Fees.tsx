import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { gardens } from "@/data/gardens"
  
  export function Fees() {
    return (
      <Table>
        <TableCaption>Ticket prices are in Singapore Dollars (SGD)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Ticket Type</TableHead>
            <TableHead>Local Resident</TableHead>
            <TableHead>Standard</TableHead>
            <TableHead>Child (3-12 years)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gardens.tickets.map((ticket: { type: any; localResident: number; standard: number; child: number }) => (
            <TableRow key={ticket.type}>
              <TableCell className="font-medium">{ticket.type}</TableCell>
              <TableCell>${ticket.localResident.toFixed(2)}</TableCell>
              <TableCell>${ticket.standard.toFixed(2)}</TableCell>
              <TableCell>${ticket.child.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  