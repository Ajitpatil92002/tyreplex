import React from 'react';
import Image from 'next/image';
import { MapPinIcon, ClockIcon, ShieldCheckIcon, StarIcon } from 'lucide-react';
import RatingDialog from './rating';
import Carousel from './carousel';
import Reviews from './reviews';

interface BusinessInfo {
    name: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    location: {
        address: string;
        landmark: string;
    };
    timings: string;
    directionsLink: string;
    images: string[];
    reviews: {
        username: string,
        userImg: string,
        review: string
    }[]
}

const BusinessCard: React.FC<BusinessInfo> = ({
    name,
    verified,
    rating,
    reviewCount,
    location,
    timings,
    directionsLink,
    images,
    reviews
}) => {
    return (
        <div className="flex  justify-center bg-gray-100">
            <div className="shadow-md flex flex-col rounded-md bg-white p-4 max-w-7xl w-full">
                <div className="flex gap-4 flex-col md:flex-row md:gap-10 justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-black font-semibold text-xl flex items-center">
                            {name}
                            {verified && (
                                <span className="flex items-center text-green-500 text-sm ml-2">
                                    <ShieldCheckIcon className="h-4 w-4 stroke-green-600" />
                                    Verified
                                </span>
                            )}
                        </h3>
                        <div className="flex items-center gap-2">
                            <span className="bg-green-500 p-1  text-sm text-center rounded-sm text-white">{rating.toFixed(1)}</span>
                            <span className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} className={`h-4 w-4 ${index < Math.floor(rating) ? 'stroke-yellow-400 fill-yellow-400' : 'stroke-gray-300 fill-gray-300'}`} />
                                ))}
                            </span>
                            <span className="underline text-sm whitespace-nowrap">{reviewCount} Reviews</span>

                            <RatingDialog />
                        </div>
                        <div className="mx-2 flex gap-6 text-sm">
                            {/* Location Details */}
                            <MapPinIcon className="h-6 w-6 stroke-gray-500" />
                            <div className="flex flex-col">
                                <p className="text-gray-600">{location.address}</p>
                                <p className="text-gray-600">Landmark: {location.landmark}</p>
                            </div>
                        </div>
                        <div className="mx-2 flex gap-6 text-sm">
                            {/* Timings */}
                            <ClockIcon className="h-6 w-6 stroke-gray-500" />
                            <div className="flex flex-col">
                                <p className="text-gray-600">{timings}</p>
                            </div>
                        </div>
                        {/* Get Directions Button */}
                        <div>
                            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                                <button className="p-2 px-10 text-sm border border-red-600 font-semibold hover:bg-red-600 hover:text-white rounded-md text-red-500 transition-all duration-100">
                                    Get Directions
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* <div className="md:p-4 flex-1">
                        <div className="min-w-[200px] md:min-w-[300px] max-h-[200px] overflow-x-auto flex items-center gap-4 scrollbar-hidden">
                            {images.map((src, index) => (
                                <Image key={index} width={1000} height={1000} alt={`Image ${index + 1}`} src={src} className="h-30 w-auto" />
                            ))}
                        </div>
                    </div> */}
                    <Carousel images={images} />
                </div>
                <Reviews reviewCount={reviewCount} reviews={reviews} />
            </div>
        </div>
    );
};

export default BusinessCard;
