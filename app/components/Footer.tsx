import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center gap-6 mb-2ds">
                    {/* Github Icon */}
                    <Link href="https://github.com/tagaritt" className="transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                        <Image src="/github-logo.png" alt="GitHub" width={ 55 } height={ 55 }/>
                    </Link>

                    {/* LinkedIn Icon */}
                    <Link href="https://linkedin.com/in/nashtag" className="transition duration-300 hover:scale-110 opacity-60 hover:opacity-100">
                        <Image src="/linkedin-logo.png" alt="GitHub" width={ 55 } height={ 55 }/>
                    </Link>

                    {/* Footnote */}
                    <p className="pl-120 text-sm text-gray-700">I designed this in my iPad's Notes app, built it in Visual Studio Code with Next.JS and Tailwind CSS, and deployed it through Github Pages.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;