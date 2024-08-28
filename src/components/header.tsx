"use client"

import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);

    const navs = [
        {
            title: "Car Tyres",
            href: "/",
            child: {
                isDisable: false,
                title: "Popular Car Tyre Brands",
                navs: [
                    {
                        title: "MRF Tyres",
                        href: "",
                        isDisable: ""
                    },
                    {
                        title: "CEAT Tyres",
                        href: "",
                        isDisable: ""
                    }, {
                        title: "GoodYear Tyres",
                        href: "",
                        isDisable: ""
                    }
                ]
            },
            isDisable: false
        },
        {
            title: "Bike Tyres",
            href: "/",
            child: {
                isDisable: false,
                title: "Popular Car Tyre Brands",
                navs: [
                    {
                        title: "MRF Tyres",
                        href: "",
                        isDisable: ""
                    },
                    {
                        title: "CEAT Tyres",
                        href: "",
                        isDisable: ""
                    }, {
                        title: "GoodYear Tyres",
                        href: "",
                        isDisable: ""
                    }
                ]
            },
            isDisable: false
        }, {
            title: "Tyre Pressure",
            href: "/",
            child: {
                isDisable: false,
                title: "Popular Car Tyre Brands",
                navs: [

                ]
            },
            isDisable: false
        }, {
            title: "Commerical Tyres",
            href: "/",
            child: {
                isDisable: false,
                title: "All Commerical Tyres",
                navs: [

                ]
            },
            isDisable: false
        }, {
            title: "Accessories Tyres",
            href: "/",
            child: [],
            isDisable: false
        }, {
            title: "More",
            href: "/",
            child: [],
            isDisable: false
        }
    ]

    return (
        <div className='z-50 h-14 bg-white shadow-md p-4 fixed w-full top-0 flex items-center justify-between md:px-20'>
            <Image width={1000} height={1000} src={"https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png"} alt='TyrePlex' className='h-8 w-auto' />

            <div className='hidden relative md:flex items-center gap-6'>
                {navs.filter((nav) => !nav.isDisable).map((nav: any) => (
                    <div
                        key={nav.href.replace(" ", "")}
                        onMouseEnter={() => setHoveredNav(nav.title)}
                        className='relative'
                    >
                        <Link href={nav.href} className='font-semibold hover:border-b hover:border-b-red-600 hover:text-gray-700 transition-all duration-600 text-sm'>
                            <span>{nav.title}</span>
                        </Link>
                        {hoveredNav === nav.title && nav.child?.navs?.length ? (
                            <div
                                onMouseLeave={() => setHoveredNav(null)}
                                className='absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg w-48 rounded-md'>
                                <span className='text-sm px-2'>{nav.child.title}</span>
                                <ul className='list-none p-0 m-0'>
                                    {nav.child?.navs?.map((childNav: any) => (
                                        <li key={childNav.href} className='p-2 hover:bg-gray-100 text-sm'>
                                            <Link href={childNav.href} className='text-gray-700 hover:underline'>
                                                {childNav.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : ""}
                    </div>
                ))}
            </div>
            <div>
                <Link href={"/"} className='flex items-center gap-1 text-sm'>
                    <UserIcon className='h-5 w-5' />
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Header