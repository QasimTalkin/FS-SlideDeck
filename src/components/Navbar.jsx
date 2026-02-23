import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 p-6 pointer-events-none">
            <nav
                className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-8 py-4 glass-clinic rounded-full ${isScrolled
                    ? 'w-full max-w-2xl border-primary/20 shadow-[0_0_20px_rgba(0,245,255,0.1)]'
                    : 'w-full max-w-4xl border-white/5'
                    }`}
            >
                <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_var(--color-primary)] relative z-10"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-mono font-bold tracking-tighter text-primary uppercase text-lg leading-none">Abul Qasim</span>
                        <span className="font-mono text-[10px] text-textMuted uppercase tracking-[0.2em] mt-1 shrink-0">Instructor.Terminal</span>
                    </div>
                </div>

                <div className="hidden xl:flex items-center gap-10 font-mono font-bold text-[11px] text-textMain uppercase tracking-[0.25em]">
                    <a href="#about" className="hover:text-primary transition-all hover:tracking-[0.35em]">Vision</a>
                    <a href="#features" className="hover:text-primary transition-all hover:tracking-[0.35em]">Capabilities</a>
                    <a href="#archive" className="hover:text-primary transition-all hover:tracking-[0.35em]">Resources</a>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                    <ThemeToggle />
                    <a href="mailto:abulqasim110@gmail.com" className="relative group overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
                        <div className="relative px-6 py-2 bg-background/40 border border-primary/40 rounded-full font-mono font-bold text-[11px] text-primary uppercase tracking-widest group-hover:border-primary group-hover:text-textMain transition-all">
                            Initialize_Contact
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    );
}
