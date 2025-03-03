"use client"; // Required i

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
})



export default function Hero() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = `
    const PRIYA = {
        title: "Cloud Architect | DevOps Engineer | Creative Coder",
        passions:
            [
                "Tech Enthusiast", "Web Developer", "Photographer 📷", 
                "Cook 🍳", "Baker 🎂", "Artist 🎨", "Pottery Lover 🏺"
            ],
        traits:
            [
                "Automation Obsessed 🤖", 
                "Pixel Perfectionist 🖌️", 
                "CloudNative Thinker ☁️"
            ],
        motto: "Breaking code & baking bread since 2011!",
    };`;

    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
      <section className="text-center py-16">
        {/* Profile Picture */}
        <img
            src="/Priya.JPG"
            alt="Priya Rani"
            className="w-60 h-60 md:w-96 md:h-96 rounded-full border-4 border-teal-600 shadow-lg mx-auto mt-10 mb-6"
        />
        
        {/* Name */}
        <motion.h1
            // className="mt-16 text-6xl font-extrabold tracking-widest bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text drop-shadow-lg max-w-xl max-h-2xl mx-auto"
            //className={`${playfair.className} mt-16 text-6xl font-extrabold text-teal-400`}
            className={`${orbitron.className} mt-16 text-6xl font-extrabold tracking-widest text-teal-400 drop-shadow-lg`}
            
            //className="mt-16 text-6xl font-[700] tracking-[0.15em] text-teal-400 drop-shadow-lg font-['Orbitron'] uppercase"
            //style={{
            //    fontFamily: "'Orbitron', 'Rajdhani', 'Audiowide', 'Quantico', sans-serif"
            //}}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            PRIYA RANI
        </motion.h1>
      
      
      {/* Code Block Typing Animation */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-16 text-sm shadow-lg max-w-2xl mx-auto text-left overflow-auto">
        <code>{displayedText}{showCursor && "|"}</code>
      </pre>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-16 text-2xl">
        <a href="https://www.linkedin.com/in/priya-rani-83560025" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Priya-coding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/priya_the_techie_artist" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaInstagram />
        </a>
      </div>
      
      </section>
    );
}