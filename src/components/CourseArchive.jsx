import React from 'react';
import courses from '../content/courses.json';

export default function CourseArchive() {
    return (
        <section id="archive" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-primary/10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter text-white mb-4">
                            Data_Vault
                        </h2>
                        <p className="text-textMuted font-sans text-lg max-w-xl">
                            Sterile documentation modules. Decrypted and optimized for rapid intellectual injection.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full glass-clinic border border-primary/20">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
                        <span className="font-mono font-bold text-xs text-primary uppercase tracking-[0.2em]">
                            {courses.length}_Active_Sectors
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={course.id || index}
                            className="clinic-card flex flex-col h-full group pb-4"
                        >
                            {/* Card Header Graphic with Real Image */}
                            <div className="w-full h-48 relative overflow-hidden">
                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                                <div className="scanline"></div>

                                <img
                                    src={course.imagePath}
                                    alt={`${course.title} Cover`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100 invert group-hover:invert-0 transition-all font-sans"
                                    loading="lazy"
                                />

                                <div className="absolute top-5 left-5 z-30">
                                    <span className="glass-clinic text-primary font-mono text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-primary/30">
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="absolute top-0 left-8 w-12 h-1 bg-primary/20 rounded-full group-hover:bg-primary/50 transition-colors"></div>

                                <h3 className="text-xl font-bold tracking-tight mb-4 text-white uppercase group-hover:text-primary transition-colors font-mono">
                                    {course.title.replace(/ /g, '_')}
                                </h3>

                                <p className="font-sans text-sm leading-relaxed text-textMuted mb-8 flex-grow">
                                    {course.description}
                                </p>

                                <div className="flex flex-col gap-4 mt-auto">
                                    <a
                                        href={course.htmlPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group/btn"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 blur-md group-hover/btn:bg-primary/40 transition-all rounded-full opacity-0 group-hover/btn:opacity-100"></div>
                                        <div className="relative w-full flex justify-center items-center gap-2 font-mono text-[11px] font-black py-3.5 bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-background hover:border-primary transition-all uppercase tracking-[0.2em]">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                            Execute_Module
                                        </div>
                                    </a>
                                    <a
                                        href={course.pdfPath}
                                        download
                                        className="w-full flex justify-center items-center gap-2 font-mono text-[11px] font-bold py-3.5 text-textMuted/60 hover:text-primary transition-all uppercase tracking-[0.2em] bg-transparent border border-white/5 hover:border-primary/20 rounded-full"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                        Save_Dossier
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {courses.length === 0 && (
                        <div className="col-span-full py-24 text-center rounded-[3rem] border border-dashed border-primary/20 font-mono text-primary/40 text-sm tracking-widest bg-surface/20">
                            SYSTEM_ERROR: NO_DATA_DETECTED_IN_VAULT
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
