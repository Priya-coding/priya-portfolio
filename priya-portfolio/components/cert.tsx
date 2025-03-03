"use client";

import { FaChevronRight } from "react-icons/fa";

const certificationsData = [
    { title: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", year: "2023" },
    { title: "Python Data Structures", issuer: "Coursera", year: "2019" },
    { title: "Using Python to Access Web Data", issuer: "Coursera", year: "2019" },
];

export default function Certifications() {
    return (
        <section className="text-white py-16 px-6 max-w-6xl mx-auto text-left">
            <h2 className="text-l font-bold mb-6 flex justify-center items-center">🎖️ <span className=" text-md font-light text-white">CERTIFICATIONS</span></h2>
            <div className="space-y-4 mt-12">
                {certificationsData.map((cert, index) => (
                    <div 
                        key={index} 
                        className="flex items-center space-x-4 border-b border-gray-700 pb-2 transition-all group hover:translate-x-2"
                    >
                        <FaChevronRight className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <div>
                            <h3 className="text-md font-semibold">{cert.title}</h3>
                            <p className="text-gray-300 text-sm">{cert.issuer} - {cert.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
