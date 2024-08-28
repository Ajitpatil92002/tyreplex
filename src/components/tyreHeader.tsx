"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const filterOptions = ['Filter By', 'Option 1', 'Option 2', 'Option 3']
const popularityOptions = ['Most Popular', 'Least Popular', 'Newest', 'Oldest']

export default function TyreHeader() {
    const [filterBy, setFilterBy] = useState(filterOptions[0])
    const [popularity, setPopularity] = useState(popularityOptions[0])

    return (
        <div className="font-sans bg-gray-100">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-xl font-semibold mb-4">Tyres sold by this Dealer</h1>
                <div className="flex justify-end space-x-4">
                    <CustomSelect
                        options={filterOptions}
                        value={filterBy}
                        onChange={setFilterBy}
                        width="w-40"
                    />
                    <CustomSelect
                        options={popularityOptions}
                        value={popularity}
                        onChange={setPopularity}
                        width="w-44"
                    />
                </div>
            </div>
        </div>
    )
}

function CustomSelect({ options, value, onChange, width }: any) {
    return (
        <div className={`relative ${width}`}>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                {options.map((option: any, index: any) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
            </div>
        </div>
    )
}