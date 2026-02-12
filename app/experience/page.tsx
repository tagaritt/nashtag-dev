import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4 max-w-8xl">
            <div className="">
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Recent Experience</h1>

            </div>

            <div className="">
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Projects</h1>
              <p className='text-lg text-left mt-6 mx-105 text-gray-400'>nashtag.dev - You're on it! My development portflio site, making it easy to display my skills for recruiters and fellow developers alike.</p>
              <p className='text-lg text-left mt-6 mx-105 text-gray-400'>nashtag.studio - My second 'portfolio' site of sorts</p>
              <p className='text-lg text-left mt-6 mx-105 text-gray-400'>LovingCBH - Developed a website as a Valentine's Day gift in the past. My first deployed web app!</p>
            </div>

            <div className="">
              <p className='text-0.5xl font-normal text-gray-500 text-left mx-105 mt-10'><b className='hover:animate-pulse text-white'><Link href="/files/Resume_TinasheTagarisa.pdf">Click here to view my r&eacute;sum&eacute;!</Link></b></p>
            </div>
        </div>        
    </div>
  )
}

export default page