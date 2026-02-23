import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRefs.current, {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1.5,
                ease: 'expo.out',
            });

            gsap.from('.surgical-marker', {
                scale: 0,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    return (
        <section ref={containerRef} id="about" className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden">
            <div className="scanline"></div>

            <div className="max-w-6xl w-full mx-auto relative z-10 text-center flex flex-col items-center">
                <div className="mb-8">
                    <span ref={addToRefs} className="inline-flex items-center gap-3 font-mono font-bold text-primary text-[10px] px-6 py-2 glass-clinic rounded-full uppercase tracking-[0.4em] neon-border">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_var(--color-primary)]"></span>
                        Access: 100%_FREE_CURRICULUM
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-sans font-black tracking-tighter mb-12 text-textMain">
                    <div className="overflow-hidden">
                        <span ref={addToRefs} className="block hover:text-primary transition-colors duration-700 cursor-default uppercase">Hey_Student!</span>
                    </div>
                    <div className="overflow-hidden">
                        <span ref={addToRefs} className="block text-primary/40 hover:text-primary transition-colors duration-700 cursor-default uppercase">Let's_Build.</span>
                    </div>
                </h1>

                <div className="overflow-hidden max-w-3xl mx-auto glass-clinic p-12 rounded-[2.5rem] border-white/5 relative group mb-16">
                    <div className="absolute top-0 right-10 w-24 h-1 bg-primary/30 rounded-full blur-[1px]"></div>
                    <p ref={addToRefs} className="text-xl md:text-2xl leading-relaxed font-sans font-light text-textMain/80">
                        I'm sharing everything I know about **Full-Stack Development**. I've turned complex frameworks into simple patterns so you can just learn and enjoy. No paywalls. Just code. <span className="text-primary font-mono font-bold">Jump_In.</span>
                    </p>
                </div>

                <div className="overflow-hidden">
                    <div ref={addToRefs} className="flex flex-col sm:flex-row gap-8">
                        <a href="#archive" className="relative group">
                            <div className="absolute inset-0 bg-primary/40 blur-2xl group-hover:bg-primary/60 transition-all rounded-full opacity-40"></div>
                            <div className="relative px-14 py-5 bg-primary text-background font-mono font-black text-sm rounded-full border border-primary shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:scale-105 transition-all uppercase tracking-[0.25em]">
                                Explore_Roadmap
                            </div>
                        </a>
                        <a href="#about" className="px-14 py-5 glass-clinic border border-white/10 rounded-full font-mono font-bold text-sm text-textMain/50 hover:text-primary hover:border-primary/40 transition-all uppercase tracking-[0.2em]">
                            Free_Resources
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative surgical markers */}
            <div className="surgical-marker absolute top-1/4 left-10 w-16 h-[1px] bg-primary/20"></div>
            <div className="surgical-marker absolute top-1/4 left-10 w-[1px] h-16 bg-primary/20"></div>
            <div className="surgical-marker absolute top-1/4 right-10 w-16 h-[1px] bg-primary/20"></div>
            <div className="surgical-marker absolute top-1/4 right-10 w-[1px] h-16 bg-primary/20"></div>
            <div className="surgical-marker absolute bottom-1/4 left-10 w-16 h-[1px] bg-primary/20"></div>
            <div className="surgical-marker absolute bottom-1/4 left-10 w-[1px] h-16 bg-primary/20"></div>
            <div className="surgical-marker absolute bottom-1/4 right-10 w-16 h-[1px] bg-primary/20"></div>
            <div className="surgical-marker absolute bottom-1/4 right-10 w-[1px] h-16 bg-primary/20"></div>
        </section>
    );
}
