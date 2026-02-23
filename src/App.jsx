import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseArchive from './components/CourseArchive';

function App() {
    return (
        <div className="w-full bg-background min-h-screen font-body text-textMain selection:bg-primary selection:text-black">
            <Navbar />
            <Hero />
            <Features />
            <CourseArchive />
        </div>
    );
}

export default App;
