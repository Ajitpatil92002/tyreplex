"use client"

import React, { SetStateAction, useState } from 'react';
import { X, Frown, Meh, Smile } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Define the RatingOptionProps interface
interface RatingOptionProps {
    icon: any;
    selected: boolean;
    onClick: () => void;
}

const RatingOption: React.FC<RatingOptionProps> = ({ icon: Icon, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`p-2 rounded-full ${selected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
    >
        <Icon size={40} />
    </button>
);

export default function RatingDialog() {
    const [ratings, setRatings] = useState<{ cleanliness: number | null; services: number | null; staff: number | null }>({
        cleanliness: null,
        services: null,
        staff: null,
    });
    const [review, setReview] = useState<string>('');

    const handleRating = (category: keyof typeof ratings, value: number) => {
        setRatings(prev => ({ ...prev, [category]: value }));
    };

    const handleSubmit = () => {
        console.log('Ratings:', ratings);
        console.log('Review:', review);
        // Here you would typically send this data to your backend
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size={"sm"}>Rate</Button>
            </DialogTrigger>
            <DialogContent className="w-screen md:max-w-[800px]">
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300" alt="Dealer" className=" rounded-md" />
                        <h2 className=" font-semibold">SHREE HEMKUNT TYRES AND SERVICES</h2>
                    </div>
                    {['cleanliness', 'services', 'staff'].map((category) => (
                        <div key={category} className="flex justify-between items-center">
                            <span className="capitalize text-lg">{category}</span>
                            <div className="flex space-x-2">
                                {[Frown, Meh, Smile].map((Icon, index) => (
                                    <RatingOption
                                        key={index}
                                        icon={Icon}
                                        selected={ratings[category as keyof typeof ratings] === index}
                                        onClick={() => handleRating(category as keyof typeof ratings, index)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    <div>
                        <h3 className="font-semibold mb-2">Your review for this dealer</h3>
                        <Textarea
                            placeholder="Share your experience about this dealer"
                            value={review}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
                            rows={4}
                        />
                    </div>
                    <Button onClick={handleSubmit} className="w-full">Submit</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
