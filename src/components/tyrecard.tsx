import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheckIcon, Star } from "lucide-react"
import Image from "next/image"

export default function TyreCard() {
    return (
        <Card className=" overflow-hidden relative hover:shadow-xl">
            <CardContent className="p-4 flex flex-col h-full">
                <Badge className="absolute top-2 right-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-2 py-1 text-xs rounded">
                    <ShieldCheckIcon className="h-5 w-5 mr-1" />  5 Year Warranty
                </Badge>
                <div className="flex-grow space-y-2">
                    <div className="font-extrabold text-2xl text-purple-700 mb-1">apollo</div>
                    <div className="font-bold text-lg mb-1">AMAZER 4G LIFE</div>
                    <div className="text-gray-600 mb-2">145/80 R12</div>
                    <div className="flex items-center mb-2">
                        <div className="bg-green-600 text-white rounded px-1 text-sm font-bold flex items-center mr-2">
                            4 <Star className="w-3 h-3 ml-0.5 fill-current" />
                        </div>
                        <div className="text-sm text-gray-500">321 Reviews</div>
                    </div>
                    <div className="font-bold text-xl mb-1">₹ 3,247</div>
                    <div className="text-green-600 text-sm font-semibold">Offer available</div>
                    <div className="text-gray-600 text-sm">Tube Type</div>
                </div>
                <div className="absolute -bottom-4 -right-16 w-44 h-44">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60"
                        alt="Apollo Amazer 4G Life Tyre"
                        className="w-full h-full object-contain"
                    />
                </div>
            </CardContent>
        </Card>
    )
}