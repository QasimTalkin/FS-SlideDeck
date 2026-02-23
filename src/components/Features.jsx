import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} id="features" className="py-32 px-6 md:px-12 lg:px-24 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-textMain mb-4">
                        Teaching Philosophy
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto text-lg">
                        Learning to code should be accessible, practical, and deeply visually engaging. These resources are designed to take absolute beginners to production-ready engineers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: Open Access */}
                    <div ref={addToRefs} className="clinic-card p-10 group bg-surface/40 backdrop-blur-sm">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                            <span className="font-mono text-[9px] text-primary font-bold uppercase tracking-tight">Status: Open</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-[0_0_20px_rgba(0,245,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase group-hover:text-primary transition-colors">Public_Domain</h3>
                        <p className="text-textMuted font-normal leading-relaxed text-sm">
                            Bypass access restrictions. Entire curriculum is decrypted and available for immediate consumption.
                        </p>
                    </div>

                    {/* Card 2: Visual Learning */}
                    <div ref={addToRefs} className="clinic-card p-10 group bg-surface/40 backdrop-blur-sm">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                            <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-tight">Mode: HD</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent shadow-[0_0_20px_rgba(255,0,229,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase group-hover:text-accent transition-colors">Visual_Diagnostics</h3>
                        <p className="text-textMuted font-normal leading-relaxed text-sm">
                            High-signal diagrams and step-by-step visual breakdowns designed for maximum cognitive efficiency.
                        </p>
                    </div>

                    {/* Card 3: Real World Skills */}
                    <div ref={addToRefs} className="clinic-card p-10 group bg-surface/40 backdrop-blur-sm">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                            <span className="font-mono text-[9px] text-primary font-bold uppercase tracking-tight">Core: Production</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-[0_0_20px_rgba(0,245,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase group-hover:text-primary transition-colors">Surgical_Code</h3>
                        <p className="text-textMuted font-normal leading-relaxed text-sm">
                            Bridge the gap between theory and deployment. Ship refined, industry-standard software with precision.
                        </p>
                    </div>

                    {/* Card 4: Project Based */}
                    <div ref={addToRefs} className="clinic-card p-10 group bg-surface/40 backdrop-blur-sm">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                            <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-tight">Phase: Delta</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent shadow-[0_0_20px_rgba(255,0,229,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase group-hover:text-accent transition-colors">Project_First</h3>
                        <p className="text-textMuted font-normal leading-relaxed text-sm">
                            Acquire knowledge through direct application. Modules centered around building tangible, high-value assets.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
