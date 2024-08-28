import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const brands = [
    { name: "MRF", logo: "/placeholder.svg?height=40&width=80" },
    { name: "CEAT", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Goodyear", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Apollo", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Bridgestone", logo: "/placeholder.svg?height=40&width=80" },
    { name: "JK Tyre", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Michelin Tyres", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Pirelli Tyres", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Yokohama Tyres", logo: "/placeholder.svg?height=40&width=80" },
]

export default function DealsBrand() {

    return (
        <div className="shadow-md flex flex-col rounded-md bg-white p-4">
            <h2 className="text-xl font-semibold mb-4">Deals in</h2>
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex w-max space-x-4 p-4">
                    {brands.map((brand) => (
                        <Card key={brand.name} className="w-[200px] flex-shrink-0">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <p className="text-xl font-extrabold text-muted-foreground">{brand.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}