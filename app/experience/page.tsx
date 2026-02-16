"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-15">
        <div className="space-y-4 max-w-8xl">
            <div className="grid grid-cols-1 grid-flow-row gap-4 min-w-100">
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Recent Experience</h1>
              
              <div className="grid grid-cols-2 grid-flow-row gap-x-5 min-w-100">
                <div className="col-span-1 mt-8 ml-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p className="pl-5 text-xs text-gray-500">09{"/"}22 {"-"} CURRENT</p>
                  <p className="pl-5"><b>Accenture</b> - Advanced App Engineering Analyst</p>
                  <p className="pl-5 text-small text-gray-400">Description of role {"&"} experiences had.</p>
                </div>

                <div className="col-span-1 mt-8 mr-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p className="pl-5 text-xs text-gray-500">05{"/"}21 {"-"} 08{"/"}21</p>
                  <p className="pl-5"><b>Marathon Petroleum</b> - Business Analysis Intern</p>
                  <p className="pl-5 text-small text-gray-400">Description of role {"&"} experiences had.</p>
                </div>
                
                <div className="col-span-1 mt-2 ml-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p className="pl-5 text-xs text-gray-500">01{"/"}20 {"-"} 08{"/"}20</p>
                  <p className="pl-5"><b>Regeneron</b> - Project Management Intern</p>
                  <p className="pl-5 text-small text-gray-400">Description of role {"&"} experiences had.</p>
                </div>
                
                <div className="col-span-1 mt-2 mr-100 w-125 h-30 rounded flex flex-col justify-center hover:bg-neutral-900 hover:transition-colors">
                  <p className="px-5 text-xs text-gray-500">06{"/"}19 {"-"} 08{"/"}19</p>
                  <p className="px-5"><b>Honda</b> - Software Development Intern</p>
                  <p className="px-5 text-small text-gray-400">Description of role {"&"} experiences had.</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Projects</h1>
              
              <div className="grid grid-cols-2 grid-flow-row gap-x-5 min-w-100">
                <div className="col-span-1 mt-8 ml-100 w-125 h-27.5 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-dev">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.dev</b> - You{"'"}re on it! My development portflio site, making it easy to display my skills for recruiters and fellow developers alike.</p>
                  </Link>
                </div>
                
                <div className="col-span-1 mt-8 mr-100 w-125 h-27.5 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-studio">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.studio</b> - My second {"'"}portfolio{"'"} site; a place for all of my creative endeavors. It{"'"}s a new build, so your patience is very much appreciated!</p>
                  </Link>
                </div>

                <div className="col-span-1 mt-2 ml-100 w-125 h-27.5 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                <Link href="https://github.com/tagaritt/project-rimi">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Rimi</b> - An app I{"'"}m building to target language learning by implementing AI in a meaningful way. Follow my journey as I rethink education!</p>
                  </Link>
                </div>

                <div className="col-span-1 mt-2 mr-100 w-125 h-27.5 rounded flex justify-center hover:bg-neutral-900 hover:transition-colors">
                  <Link href="https://www.github.com/tagaritt/loving-her">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Loving Her</b> - Developed a website as a Valentine{"'"}s Day gift in the past. My first deployed web app!</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 grid-flow-row gap-4 min-w-100">
              <h1 className='text-4xl font-bold text-left mx-105 mt-10'>Certifications</h1>
              
              {/* AWS Certified Cloud Practitioner Badge */}
              <div className="grid grid-cols-1 grid-flow-row gap-x-5 min-w-100">
                <div className="row-span-1 mt-4 ml-104 w-45 flex flex-row justify-center">
                  <Link href="https://www.credly.com/badges/fdb947a9-1897-46af-948e-7cf7a53c7cd9/public_url" className="transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                    <Image src="/aws-ccp.png" alt="AWS CCP" width={ 600 } height={ 600 }/>
                  </Link>

                  <Link href="https://www.credly.com/badges/df506f55-72ad-44a5-a379-7981f810960b/public_url" className="pl-5 transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                    <Image src="/aws-caip.png" alt="AWS CAIP" width={ 600 } height={ 600 }/>
                  </Link>
                </div>
              </div>
            </div>

            {/*Link to Resume*/}
            <div>
              <p className='text-0.5xl font-normal text-gray-500 text-left mx-105 mt-15'>
                <b className='hover:animate-pulse text-white'>
                  <Link href="/files/Resume_TinasheTagarisa.pdf">Click here to view my r&eacute;sum&eacute;!</Link>
                </b>
              </p>
            </div>
        </div>        
    </div>
  )
}

export default page