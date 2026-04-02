"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'

const page = () => {
    const scrollRef = useRef(null)
    const [pageIndex, setPageIndex] = useState(0)

    const totalPages = 4

    const goToPage = (index) => {
        if (!scrollRef.current) return
        const width = scrollRef.current.clientWidth
        scrollRef.current.scrollTo({
            left: width * index,
            behavior: 'smooth'
        })
    }
    
    const nextPage = () => {
        if (pageIndex < totalPages - 1) {
        const newIndex = pageIndex + 1
            setPageIndex(newIndex)
            goToPage(newIndex)
        }
    }

    const prevPage = () => {
        if (pageIndex > 0) {
        const newIndex = pageIndex - 1
            setPageIndex(newIndex)
            goToPage(newIndex)
        }
    }

    return (
        <div className="flex flex-col min-h-screen w-full">
            <div className="flex-grow">
                <div className="px-6 pt-25 mx-auto">
                    <h1 className='text-4xl md:text-4xl font-bold whitespace-nowrap'>About Me</h1>
                </div>

                <div className="hidden md:block max-w-5xl mx-auto py-4 space-y-4 text-gray-400">
                    <p className='text-lg'>I{"'"}m a software engineer with a knack for web design and data engineering{","} leading to me building eye{"-"}pleasing{","} storytelling databases and interfaces{"."} I find joy in building things that help and that users enjoy interacting with{","} placing myself in a melting pot of design and engineering{"."}</p>

                    <p className='text-lg'>I come with experience from multiple industries including automotive{","} pharmaceuticals{","} healthcare{","} and high tech having worked with companies such as <b className="hover:text-white transition-colors"><Link href="https://www.honda.com/operations">Honda</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.regeneron.com/">Regeneron</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.intel.com/content/www/us/en/homepage.html">Intel</Link></b>{","} and others{"."} Outside of what I do professionally{","} I continue to develop passion projects in order to grow as a developer and hopefully lead the next generation of developers{"."}</p>

                    <p className='text-lg'>Right now{","} I work as an Advanced Application Engineering Analyst for <b className="hover:text-white transition-colors"><Link href="https://www.accenture.com/us-en">Accenture</Link></b>{","} where I{"'"}ve worked on various teams to successfully bring solutions to fruition{"."} While working here{","} I{"'"}ve lead teams in building API endpoints and pilot program demos{","} acted as an SME for testing purposes{"'"} and built features for customer{"-"}facing applications{"."}</p>

                    <p className='text-lg'>When I{"'"}m not developing{","} I tend to create visual art through photography{"/"}videography{","} lift peculiar amounts of weight{","} and attempt my annual race to Division 1{"."}</p>
                </div>

                {/* Mobile Paging Layout */}
                <div className="relative md:hidden w-full">
                    {/* Left Tap Zone */}
                    <div className="absolute left-0 top-0 h-full w-1/12 z-20" onClick={prevPage}/>
            
                    {/* Right Tap Zone */}
                    <div className="absolute right-0 top-0 h-full w-1/12 z-20" onClick={nextPage}/>

                    {/* Scrollable Pages */}
                    <div ref={scrollRef} className="overflow-x-auto snap-x snap-mandatory flex h-[calc(75vh-120px)] scroll-smooth no-scrollbar" onScroll={(e) => {
                        const width = e.target.clientWidth
                        const newIndex = Math.round(e.target.scrollLeft / width)
                        if (newIndex !== pageIndex) setPageIndex(newIndex)
                    }}>

                    {/* Page 1 */}
                    <div className="snap-center shrink-0 w-full px-6 flex items-center">
                        <p className="text-2xl text-gray-400 leading-relaxed">I{"'"}m a software engineer with a knack for web design and data engineering, leading to me building eye-pleasing, storytelling databases and interfaces. I find joy in building things that help and that users enjoy interacting with, placing myself in a melting pot of design and engineering.</p>
                    </div>
            
                    {/* Page 2 */}
                    <div className="snap-center shrink-0 w-full px-6 flex items-center">
                        <p className="text-2xl text-gray-400 leading-relaxed">I come with experience from multiple industries including automotive{","} pharmaceuticals{","} healthcare{","} and high tech having worked with companies such as <b className="hover:text-white transition-colors"><Link href="https://www.honda.com/operations">Honda</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.regeneron.com/">Regeneron</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.intel.com/content/www/us/en/homepage.html">Intel</Link></b>{","} and others{"."} Outside of what I do professionally{","} I continue to develop passion projects in order to grow as a developer and hopefully lead the next generation of developers.</p>
                    </div>
            
                    {/* Page 3 */}
                    <div className="snap-center shrink-0 w-full px-6 flex items-center">
                        <p className="text-2xl text-gray-400 leading-relaxed">Right now{","} I work as an Advanced Application Engineering Analyst for <b className="hover:text-white transition-colors"><Link href="https://www.accenture.com/us-en">Accenture</Link></b>{","} where I{"'"}ve worked on various teams to successfully bring solutions to fruition{"."} While working here{","} I{"'"}ve lead teams in building API endpoints and pilot program demos{","} acted as an SME for testing purposes{","} and built features for customer{"-"}facing applications{"."}</p>
                    </div>

                    {/* Page 4 */}
                    <div className="snap-center shrink-0 w-full px-6 flex items-center">
                        <p className="text-2xl text-gray-400 leading-relaxed">When I{"'"}m not developing{","} I tend to create visual art through photography{"/"}videography{","} lift peculiar amounts of weight{","} and attempt my annual race to Division 1.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page