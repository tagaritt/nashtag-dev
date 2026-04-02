"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-0">
        <div className="space-y-12 w-full max-w-6xl">

            {/* RECENT EXPERIENCE*/}
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-left ml-7 md:ml-26 mt-30 md:mt-30'>Recent Experience</h1>
              
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 md:ml-19 md:grid-flow-row md:gap-x-5 md:min-w-50">
                
                <div className="rounded p-4 hover:bg-neutral-900 transition-colors">
                  <p className="pl-3 text-xs text-gray-500">09{"/"}22 {"-"} CURRENT</p>
                  <p className="pl-3"><b>Accenture</b> - Advanced App Engineering Analyst</p>
                  <p className="pl-3 text-small text-gray-400">Automated dataflows{","} shaped AI solutions{","} and drove pilots to secure investments{"."} Done through the leading of and participation within cross{"-"}functional teams{","} presentation of insights to executives on various client accounts{","} and performance as the go{"-"}to expert in some cases{"."}</p>
                </div>

                <div className="rounded p-4 hover:bg-neutral-900 transition-colors">
                  <p className="pl-3 text-xs text-gray-500">05{"/"}21 {"-"} 08{"/"}21</p>
                  <p className="pl-3"><b>Marathon Petroleum</b> - Business Analysis Intern</p>
                  <p className="pl-3 text-small text-gray-400">Analyzed 600{"+"} test scripts to drive scalable automation for global operations{","} and built a modern web application that transformed legacy financial data into an accessible{","} executive{"-"}ready reporting tool{"."}</p>
                </div>
                
                <div className="rounded p-4 hover:bg-neutral-900 transition-colors">
                  <p className="pl-3 text-xs text-gray-500">01{"/"}20 {"-"} 08{"/"}20</p>
                  <p className="pl-3"><b>Regeneron</b> - Project Management Intern</p>
                  <p className="pl-3 text-small text-gray-400">Deployed Windows 10 to 3{","}000{"+"} devices nationwide with minimal operational disruption{","} and assisted the first phase of the company{"'"}s Disaster Recovery plan by migrating on{"-"}prem data and databases to AWS{"."}</p>
                </div>
                
                <div className="rounded p-4 hover:bg-neutral-900 transition-colors">
                  <p className="pl-3 text-xs text-gray-500">06{"/"}19 {"-"} 08{"/"}19</p>
                  <p className="pl-3"><b>Honda</b> - Software Development Intern</p>
                  <p className="pl-3 text-small text-gray-400">Built a proof{"-"}of{"-"}concept web application to automate monthly production{"-"}efficiency analysis and gained hands{"-"}on insight into the cross{"-"}department collaboration required for seamless plant operations{"."}</p>
                </div>
              </div>
            </div>

            {/* PASSION PROJECTS */}
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-left ml-9 md:ml-28 mt-10'>Projects</h1>
              
              <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 md:ml-19 md:grid-flow-row md:gap-x-5 md:min-w-50">
                <div className="rounded px-4 py-1 hover:bg-neutral-900 transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-dev">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.dev</b> - You{"'"}re on it! My development portflio site, making it easy to display my skills for recruiters and fellow developers alike.</p>
                  </Link>
                </div>
                
                <div className="rounded px-4 py-1 hover:bg-neutral-900 transition-colors">
                  <Link href="https://www.github.com/tagaritt/nashtag-studio">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">nashtag.studio</b> - My second {"'"}portfolio{"'"} site; a place for all of my creative endeavors. It{"'"}s a new build, so your patience is very much appreciated!</p>
                  </Link>
                </div>

                <div className="rounded px-4 py-1 hover:bg-neutral-900 transition-colors">
                <Link href="https://github.com/tagaritt/project-rimi">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Project Rimi</b> - An app I{"'"}m building to target language learning by implementing AI in a meaningful way. Follow my journey as I rethink education!</p>
                  </Link>
                </div>

                <div className="rounded px-4 py-1 hover:bg-neutral-900 transition-colors">
                  <Link href="https://www.github.com/tagaritt/loving-her">
                    <p className='text-md text-left m-5 text-gray-400'><b className="hover:animate-pulse text-white">Loving Her</b> - Developed a website as a Valentine{"'"}s Day gift in the past. My first deployed web app!</p>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-left ml-9 md:ml-28 mt-10'>Certifications</h1>
              
              {/* AWS Certified Cloud Practitioner Badge */}
              <div className="grid grid-cols-1 gap-2 mt-6 md:grid-cols-2 md:ml-19 md:grid-flow-row md:gap-x-5 md:min-w-50">
                <div className="flex flex-row items-center justify-left gap-6 ml-8 mt-6 mb-10">
                  <Link href="https://www.credly.com/badges/fdb947a9-1897-46af-948e-7cf7a53c7cd9/public_url" className="transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                    <Image src="/aws-ccp.png" alt="AWS CCP" width={ 80 } height={ 80 }/>
                  </Link>

                  <Link href="https://www.credly.com/badges/df506f55-72ad-44a5-a379-7981f810960b/public_url" className=" transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                    <Image src="/aws-caip.png" alt="AWS CAIP" width={ 80 } height={ 80 }/>
                  </Link>
                </div>
              </div>
            </div>

            {/*Link to Resume*/}
            <div>
              <p className='text-md text-left mb-20 ml-9 md:ml-28 mt-10'>
                <b className='hover:animate-pulse text-white'>
                  <Link href="/files/TinasheTagarisa_Resume.pdf">Click here to view my r&eacute;sum&eacute;!</Link>
                </b>
              </p>
            </div>
        </div>        
    </div>
  )
}

export default page