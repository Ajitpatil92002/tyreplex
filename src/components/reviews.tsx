"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Reviews = ({ reviewCount, reviews }: {
    reviewCount: string | number,
    reviews: {
        username: string,
        userImg: string,
        review: string
    }[]
}) => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollAmount = 400; // Adjust based on item width or desired scroll distance
    const intervalTime = 2000; // 2 seconds

    const scrollToPosition = (position: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: position,
                behavior: 'smooth',
            });
            setScrollPosition(position);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
                const newScrollPosition = (scrollPosition + scrollAmount) % (maxScroll + scrollAmount + 150);
                scrollToPosition(newScrollPosition);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [scrollAmount, intervalTime, scrollPosition]);

    return (
        <div className="mt-16 p-4">
            <h4 className="font-semibold text-sm mb-2">{reviewCount} Google Reviews</h4>
            <div className="">
                <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hidden">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex-none w-[240px] md:w-[400px] bg-white shadow-md rounded-md border border-gray-200 flex flex-col p-4">
                            <div className="flex gap-4 mb-2">
                                <Image src={review.userImg} alt={review.username} width={40} height={40} className="rounded-full" />
                                <span className="font-semibold text-gray-800">{review.username}</span>
                            </div>
                            <p title={review.review} className="text-gray-600 text-sm">{review.review.slice(0, 180)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews