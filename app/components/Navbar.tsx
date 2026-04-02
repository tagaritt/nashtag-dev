"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [closing, setClosing] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 250); 
    } else {
      setIsOpen(true);
    }
  };

  const pageOptions = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className='fixed w-full flex items-center justify-between md:justify-center py-1 px-6 md:px-40 backdrop-blur-sm z-50 border-b-1 border-b-neutral-950/10'>
        {/* Linked Logo */}
        <Link href="/" className="transition duration-300 hover:scale-105">
            <Image src="/nashtag-logo.png" alt="NashTag logo" width={ 45 } height={ 45 }/>
        </Link>

        {/* This is where all of the other links in the navbar will go. */}
        <ul className="flex gap-14 text-xl ml-120 p-5 itmes-center justify-center">
            <Link href="/" className="text-white font-semibold hover:animate-pulse transition-colors">Home</Link> 
            <Link href="/about" className="text-white font-semibold hover:text-white transition-colors">About</Link>
            <Link href="/experience" className="text-white font-semibold hover:text-white transition-colors">Experience</Link>
        </ul>

        {/* Mobile - Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className={`hamburger hamburger--collapse md:hidden ${isOpen && !closing ? "is-active" : ""}`}
            type="button"
            onClick={handleToggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {(isOpen || closing) && (
          <div
            className={`md:hidden menu-slide absolute top-full left-0 w-full bg-neutral-950/90 backdrop-blur-lg border-b border-neutral-900/40
              ${isOpen && !closing ? "menu-open" : "menu-close"}`}
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {pageOptions.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleToggle}
                  className={`text-white text-lg font-semibold menu-item ${
                    isOpen && !closing ? "menu-item-open" : "menu-item-close"
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar