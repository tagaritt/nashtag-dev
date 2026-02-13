import React from 'react';
import { ContactForm } from '@/components/ContactForm';


const page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl">
                {/* Header */}
                <div className="mb-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    
                    <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">Talk to me!</h1>
                    <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">Have a question? Want to work together? Need help solving a Rubik's cube? Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>
            </div>
        </div>
    );
}

export default page