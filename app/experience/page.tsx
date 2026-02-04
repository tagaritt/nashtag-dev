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
            </div>

            <div className="">
              <p className='text-0.5xl font-normal text-left mx-105 mt-10'><Link href="/files/Resume_TinasheTagarisa.pdf">Click here to view my r&eacute;sum&eacute;!</Link></p>
            </div>
        </div>        
    </div>
  )
}

export default page