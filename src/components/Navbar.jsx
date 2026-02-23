import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Vision', href: '#about' },
        { name: 'Capabilities', href: '#features' },
        { name: 'Resources', href: '#archive' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 p-6 pointer-events-none">
            <nav
                className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 glass-clinic rounded-full relative ${isScrolled
                    ? 'w-full max-w-5xl border-primary/20 shadow-[0_0_30px_rgba(0,245,255,0.15)] bg-surface/80'
                    : 'w-full max-w-6xl border-white/5'
                    }`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-3 flex-shrink-0 z-50">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-primary rounded-sm shadow-[0_0_10px_var(--color-primary)] relative z-10"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-mono font-bold tracking-tighter text-primary uppercase text-base leading-none">Abul Qasim</span>
                        <span className="font-mono text-[9px] text-textMuted uppercase tracking-[0.2em] mt-0.5 shrink-0">Your_Friend_Qasim</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 font-mono font-bold text-[10px] text-textMain uppercase tracking-[0.25em] mx-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-primary transition-all hover:tracking-[0.35em]">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-3 flex-shrink-0 z-50">
                    <div className="hidden sm:block">
                        <ThemeToggle />
                    </div>

                    <a href="mailto:abulqasim110@gmail.com" className="hidden md:block relative group overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
                        <div className="relative px-5 py-2 bg-background/40 border border-primary/40 rounded-full font-mono font-bold text-[10px] text-primary uppercase tracking-widest group-hover:border-primary group-hover:text-textMain transition-all">
                            Say_Hi!
                        </div>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-primary/5 rounded-full border border-primary/20"
                    >
                        <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`absolute top-full left-0 w-full mt-4 p-4 lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                    <div className="glass-clinic rounded-[2rem] p-8 border border-primary/20 flex flex-col gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-surface/95 backdrop-blur-xl">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-mono font-black text-xl text-textMain hover:text-primary transition-all flex items-center justify-between group"
                                >
                                    <span className="tracking-[0.2em] uppercase">{link.name}</span>
                                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all"></span>
                                </a>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] text-textMuted uppercase tracking-widest">Protocol: THEME_TOGGLE</span>
                                <ThemeToggle />
                            </div>
                            <a
                                href="mailto:abulqasim110@gmail.com"
                                className="w-full py-4 glass-clinic border border-primary/40 rounded-2xl flex items-center justify-center gap-3 font-mono font-bold text-xs text-primary uppercase tracking-[0.2em] hover:bg-primary hover:text-background transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                Say_Hi!
                            </a>
                        </div>

                        <div className="text-center font-mono text-[8px] text-primary/30 uppercase tracking-[0.5em] mt-2">
                            --- End_Of_Transmission ---
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
