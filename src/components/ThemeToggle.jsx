import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');

    // Initialize theme from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'dark';
        setTheme(saved);
        if (saved === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center"
        >
            <div className={`absolute inset-0 bg-primary/20 blur-md rounded-full transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}></div>
            <div className="relative px-4 py-1.5 glass-clinic rounded-full border border-primary/20 group-hover:border-primary/50 transition-all font-mono font-bold text-[10px] tracking-widest text-primary flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-primary shadow-[0_0_5px_var(--color-primary)]' : 'bg-textMuted'}`}></span>
                {theme === 'dark' ? 'NIGHT_MODE' : 'DAY_MODE'}
            </div>
        </button>
    );
}
