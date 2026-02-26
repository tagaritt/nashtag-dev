import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full">
        <div className="pt-10 py-4 mx-auto">
            <h1 className='text-4xl md:text-4xl font-bold text-left mx-105 mt-10'>About Me</h1>
        </div>

        <div className="hidden md:block max-w-4xl mx-auto py-6 space-y-6 text-gray-400">
            <p className='text-lg'>
                I{"'"}m a software engineer with a knack for web design and data engineering{","} leading to me building eye{"-"}pleasing{","} storytelling databases and interfaces{"."} I find joy in building things that help and that users enjoy interacting with{","} placing myself in a melting pot of design and engineering{"."} 
            </p>

            <p className='text-lg'>
                I come with experience from multiple industries including automotive{","} pharmaceuticals{","} healthcare{","} and high tech having worked with companies such as <b className="hover:text-white transition-colors"><Link href="https://www.honda.com/operations">Honda</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.regeneron.com/">Regeneron</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.intel.com/content/www/us/en/homepage.html">Intel</Link></b>{","} and others{"."} Outside of what I do professionally{","} I continue to develop passion projects in order to grow as a developer and hopefully lead the next generation of developers{"."}
            </p>

            <p className='text-lg'>
                Right now{","} I work as an Advanced Application Engineering Analyst for <b className="hover:text-white transition-colors"><Link href="https://www.accenture.com/us-en">Accenture</Link></b>{","} where I{"'"}ve worked on various teams to successfully bring solutions to fruition{"."} While working here{","} I{"'"}ve lead teams in building API endpoints and pilot program demos{","} acted as an SME for testing purposes{"'"} and built features for customer{"-"}facing applications{"."}
            </p>

            <p className='text-lg'>
                When I{"'"}m not developing{","} I tend to create visual art through photography{"/"}videography{","} lift peculiar amounts of weight{","} and attempt my annual race to Division 1{"."} 
            </p>
        </div>

        {/* Mobile Paging Layout */}
        <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex h-[calc(100vh-120px)]">
            {/* Page 1 */}
            <div className="snap-center shrink-0 w-full px-6 flex items-center">
                <p className="text-base text-gray-400 leading-relaxed">I{"'"}m a software engineer with a knack for web design and data engineering, leading to me building eye-pleasing, storytelling databases and interfaces. I find joy in building things that help and that users enjoy interacting with, placing myself in a melting pot of design and engineering.</p>
            </div>
            
            {/* Page 2 */}
            <div className="snap-center shrink-0 w-full px-6 flex items-center">
                <p className="text-base text-gray-400 leading-relaxed">I come with experience from multiple industries including automotive{","} pharmaceuticals{","} healthcare{","} and high tech having worked with companies such as <b className="hover:text-white transition-colors"><Link href="https://www.honda.com/operations">Honda</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.regeneron.com/">Regeneron</Link></b>{","} <b className="hover:text-white transition-colors"><Link href="https://www.intel.com/content/www/us/en/homepage.html">Intel</Link></b>{","} and others{"."} Outside of what I do professionally{","} I continue to develop passion projects in order to grow as a developer and hopefully lead the next generation of developers.</p>
            </div>
            
            {/* Page 3 */}
            <div className="snap-center shrink-0 w-full px-6 flex items-center">
                <p className="text-base text-gray-400 leading-relaxed">Right now{","} I work as an Advanced Application Engineering Analyst for <b className="hover:text-white transition-colors"><Link href="https://www.accenture.com/us-en">Accenture</Link></b>{","} where I{"'"}ve worked on various teams to successfully bring solutions to fruition{"."} While working here{","} I{"'"}ve lead teams in building API endpoints and pilot program demos{","} acted as an SME for testing purposes{","} and built features for customer{"-"}facing applications{"."}</p>
            </div>

            {/* Page 4 */}
            <div className="snap-center shrink-0 w-full px-6 flex items-center">
                <p className="text-base text-gray-400 leading-relaxed">When I{"'"}m not developing{","} I tend to create visual art through photography{"/"}videography{","} lift peculiar amounts of weight{","} and attempt my annual race to Division 1.</p>
            </div>

      </div>
    </div>
  )
}

export default page