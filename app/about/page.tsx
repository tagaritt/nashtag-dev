import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-8 max-w-8xl">
            <h1 className='text-4xl font-bold text-left mx-105 mt-10'>About Me</h1>

            <p className='text-lg text-left mt-6 mx-105 text-gray-400'>
                I{"'"}m a software engineer with a knack for web design and data engineering{","} leading to me building eye{"-"}pleasing{","} storytelling databases and interfaces{"."} I find joy in building things that help and that users enjoy interacting with{","} placing myself in a melting pot of design and engineering{"."} 
            </p>

            <p className='text-lg text-left mt-6 mx-105 text-gray-400'>
                I come with experience from multiple industries including automotive{","} pharmaceuticals{","} healthcare{","} and high tech having worked with companies such as <b className="hover:text-white transition-colors"><Link href="https://www.honda.com/operations">Honda</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.regeneron.com/">Regeneron</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.intel.com/content/www/us/en/homepage.html">Intel</Link></b>{","} and others{"."} Outside of what I do professionally{","} I continue to develop passion projects in order to grow as a developer and hopefully lead the next generation of developers{"."}
            </p>

            <p className='text-lg text-left mt-6 mx-105 text-gray-400'>
                Right now{","} I work as an Advanced Application Engineering Analyst for <b className="hover:text-white transition-colors"><Link href="https://www.accenture.com/us-en">Accenture</Link></b>{","} where I{"'"}ve worked on various teams to successfully bring solutions to fruition{"."} While working here{","} I{"'"}ve lead teams in building API endpoints and pilot program demos{","} acted as an SME for testing purposes{"'"} and built features for customer{"-"}facing applications{"."}
            </p>

            <p className='text-lg text-left mt-6 mx-105 text-gray-400'>
                When I{"'"}m not developing{","} I tend to create visual art through photography{"/"}videography{","} lift peculiar amounts of weight{","} and attempt my annual race to Division 1{"."} 
            </p>
        </div>
    </div>
  )
}

export default page