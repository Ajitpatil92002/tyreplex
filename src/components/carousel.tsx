"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollAmount = 300; // Adjust based on item width or desired scroll distance
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
                const newScrollPosition = (scrollPosition + scrollAmount) % (maxScroll + scrollAmount + 50);
                scrollToPosition(newScrollPosition);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [scrollAmount, intervalTime, scrollPosition]);

    return (
        <div className="relative md:p-4 flex-1">
            <div className="flex items-center gap-2 justify-between">
                {/* <Button onClick={handlePrev}>&lt;</Button> */}
                <div
                    ref={carouselRef}
                    className="min-w-[200px] md:min-w-[300px] max-h-[200px] overflow-x-auto flex items-center gap-4 scrollbar-hidden"
                >
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            width={1000}
                            height={1000}
                            alt={`Image ${index + 1}`}
                            src={src}
                            className="h-30 w-auto"
                        />
                    ))}
                </div>
                {/* <Button onClick={handleNext}>&gt;</Button> */}
            </div>
        </div>
    );
};

export default Carousel;
