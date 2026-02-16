import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='fixed w-full flex items-center justify-center py-1 px-40 backdrop-blur-sm z-50 border-b-1 border-b-neutral-950/10'>
        {/* This is code for my logo.*/}
        <Link href="/" className="transition duration-300 hover:scale-105">
            <Image src="/nashtag-logo.png" alt="NashTag logo" width={ 45 } height={ 45 }/>
        </Link>

        {/* This is where all of the other links in the navbar will go. */}
        <ul className="flex gap-14 text-xl ml-120 p-5 itmes-center justify-center">
            <Link href="/" className="text-white font-semibold hover:animate-pulse transition-colors">Home</Link> 
            <Link href="/about" className="text-white font-semibold hover:text-white transition-colors">About</Link>
            <Link href="/experience" className="text-white font-semibold hover:text-white transition-colors">Experience</Link>
            <Link href="/contact" className="text-white font-semibold hover:text-white transition-colors">Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar