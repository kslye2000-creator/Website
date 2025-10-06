import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
    return (
        <section className="bg-slate-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to see your strategy come alive?</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Let’s build a smarter, faster, more adaptive organization — together.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Button variant="primary" size="large">Book a Demo</Button>
                    <Button variant="secondary" size="large">Explore the Platform</Button>
                </div>
            </div>
        </section>
    );
};