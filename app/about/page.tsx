import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-8 max-w-10xl">
            <h1 className='text-4xl font-bold text-left mx-100 mt-10'>About Me</h1>

            <p className='text-lg text-left mt-6 mx-100 text-gray-400'>
                I’m a software engineer with a knack for web design and data engineering, leading to me building eye-pleasing, storytelling databases and interfaces. I find joy in building things that help and that users enjoy interacting with, placing myself in a melting pot of design and engineering. 
            </p>

            <p className='text-lg text-left mt-6 mx-100 text-gray-400'>
                When I'm not developing, I tend to play video games, create through photography/videography, or plot on a happy life with my girlfriend. 
            </p>
        </div>
    </div>
  )
}

export default page