"use client";

import { FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center py-16 text-white">
            <div className="max-w-9xl flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 p-6">
              
                {/* Image Section */}
                <div className="w-full md:w-1/5 flex justify-left relative">
                    {/* Text Above Image */}
                    <div className="absolute left-2 bg-gray-900 bg-opacity-90 px-4 py-2 rounded-lg shadow-md flex items-center">
                        <Image
                            src="https://fonts.gstatic.com/s/i/materialiconsoutlined/person/v15/24px.svg"
                            alt="About Icon"
                            width={15}
                            height={15}
                            className="mr-2 invert"
                        />
                        <h2 className="bg-gray-900 text-sm font-light text-white">ABOUT ME : </h2>
                    </div>
                    <img src="/images/aboutme/aboutMe.JPG" alt="Priya Rani" className="w-40 h-100 md:w-50 md:h-40 ml-5 mt-20 shadow-lg mx-auto" />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-2/3">
                    {/* <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="mr-2">👩‍💻</span> ABOUT ME
                    </h2> */}
                    <p className="text-md text-gray-300 leading-relaxed">
                    Hey there!
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                    I’m Priya—a Cloud Architect, DevOps Engineer, and Creative Technologist passionate about building scalable infrastructures, optimizing cloud solutions, and automating workflows. This website is a reflection of my journey, expertise, and passion for technology and creativity.
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                    My journey into DevOps and Cloud Engineering started with a deep curiosity about how technology drives innovation at scale. From designing resilient cloud architectures to streamlining CI/CD pipelines, I love solving complex challenges that make applications efficient, secure, and highly available.
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                    Beyond tech, I am also an artist, photographer, cook, and pottery enthusiast. I believe that creativity is not just limited to art but extends into designing elegant, robust, and scalable cloud solutions.
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                    This website is designed to give you a glimpse into my work, skills, and projects. If my work resonates with you, let’s connect! Feel free to reach out, and let’s build something impactful together.
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                    For a more streamlined view of my experience, you can download a PDF version of my resume here:
                    </p>
                    
                    {/* Download Resume Button */}
                    <a href="/PriyaRani-Resume.pdf" download className="mt-6 inline-flex items-center bg-white text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-300 transition shadow-md">
                        <FaDownload className="mr-2" /> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
