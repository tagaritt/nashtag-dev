import React from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { Mail } from 'lucide-react';

const page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl">
                {/* Header */}
                <div className="mb-10 pt-15">
                    <h1 className="text-white text-3xl font-semibold tracking-tight">Talk to me!</h1>
                    <p className="text-gray-400 pt-5">Have a question? Want to work together? Need help <b className="hover:animate-pulse text-white"><Link href="/files/Rubiks.pdf">solving a Rubik{"'"}s cube</Link></b>? Fill out the form below and I{"'"}ll get back to you as soon as possible.</p>    
                </div>

                <ContactForm/>
            </div>
        </div>
    );
}

export default page