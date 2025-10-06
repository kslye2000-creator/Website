import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Strategy Co-Pilot. All rights reserved.</p>
            </div>
        </footer>
    );
};