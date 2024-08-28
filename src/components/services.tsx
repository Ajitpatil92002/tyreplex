import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Services() {
    return (
        <div className="shadow-md flex flex-col rounded-md bg-white p-4">
            <div className="">
                <h2 className="text-base font-semibold mb-4">Services offered by this dealer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <Card className="shadow-sm">
                        <CardContent className="p-6 flex flex-col items-center">
                            <Image
                                width={1000}
                                height={1000}
                                src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                                alt="Wheel Balancing"
                                className="h-22 w-auto mb-4"
                            />
                            <h3 className="text-xl tracking-wide font-semibold mb-4">Wheel Balancing</h3>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                Book Now
                            </button>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                        <CardContent className="p-6 flex flex-col items-center">
                            <Image
                                width={1000}
                                height={1000}
                                src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                                alt="Wheel Alignment"
                                className="h-22 w-auto mb-4"
                            />
                            <h3 className="text-xl tracking-wide font-semibold mb-4">Wheel Alignment</h3>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                Book Now
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}