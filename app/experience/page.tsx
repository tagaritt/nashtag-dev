import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-15">
        <div className="space-y-4 max-w-8xl">
            <div className="grid grid-cols-1 grid-flow-row gap-4 min-w-100">
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Recent Experience</h1>
              
              <div className="grid grid-cols-2 grid-flow-row gap-x-5 min-w-100">
                <div className="col-span-1 mt-8 ml-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p className="pl-5  text-gray-500">Sept. 2022 - Current</p>
                  <b><p className="pl-5">Accenture</p></b>
                </div>

                <div className="col-span-1 mt-8 mr-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p>Marathon Petroleum</p>
                </div>
                
                <div className="col-span-1 mt-2 ml-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p>Regeneron Pharmaceuticals</p>
                </div>
                
                <div className="col-span-1 mt-2 mr-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p>Honda Manufacturing of Indiana</p>
                </div>
              </div>
              
              
              
            </div>

            <div>
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Projects</h1>
              
              <div className="grid grid-cols-2 grid-flow-row gap-x-5 min-w-100">
                <div className="col-span-1 mt-8 ml-100 w-125 h-30 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-dev">
                    <p className='text-lg text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.dev</b> - You{"'"}re on it! My development portflio site, making it easy to display my skills for recruiters and fellow developers alike.</p>
                  </Link>
                </div>
                
                <div className="col-span-1 mt-8 mr-100 w-125 h-30 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-studio">
                    <p className='text-lg text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.studio</b> - My second {"'"}portfolio{"'"} site; a place for all of my creative endeavors. It{"'"}s a new build, so your patience is very much appreciated!</p>
                  </Link>
                </div>

                <div className="col-span-1 mt-2 ml-100 w-125 h-30 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                <Link href="https://github.com/tagaritt/project-rimi">
                    <p className='text-lg text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Rimi</b> - An app I{"'"}m building to target language learning by implementing AI in a meaningful way. Follow my journey as I rethink education!</p>
                  </Link>
                </div>

                <div className="col-span-1 mt-2 mr-100 w-125 h-30 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/loving-her">
                    <p className='text-lg text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Loving Her</b> - Developed a website as a Valentine{"'"}s Day gift in the past. My first deployed web app!</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <p className='text-0.5xl font-normal text-gray-500 text-left mx-105 mt-15'><b className='hover:animate-pulse text-white'><Link href="/files/Resume_TinasheTagarisa.pdf">Click here to view my r&eacute;sum&eacute;!</Link></b></p>
            </div>
        </div>        
    </div>
  )
}

export default page