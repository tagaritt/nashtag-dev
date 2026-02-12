import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  
  return (
    <nav className='fixed top-2 w-full flex items-center justify-around py-1 px-24'>
        {/* This is code for my logo.*/}
        <Link href="/" className="transition duration-300 hover:scale-105">
            <Image src="/nashtag-logo.png" alt="NashTag logo" width={ 45 } height={ 45 }/>
        </Link>

        {/* This is where all of the other links in the navbar will go. */}
        <ul className="flex gap-15 text-lg">
            <Link href="/" className="text-white font-semibold hover:animate-pulse transition-colors">Home</Link> 
            <Link href="/about" className="text-white font-semibold hover:text-white transition-colors">About</Link>
            <Link href="/experience" className="text-white font-semibold hover:text-white transition-colors">Experience</Link>
            <Link href="/contact" className="text-white font-semibold hover:text-white transition-colors">Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar