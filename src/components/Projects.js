import React from "react";
import Profile from "../asset/buah.jpg"
import buah from "../asset/hasil.jpg"
import hasil from "../asset/pekerja.jpg"
import Kelapa from "./Kelapa";


const Projects = () => {
     return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">Penjelasan</h2>
                {/* Update grid to 4 columns on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <a href="#KelapaSawit" className="bg-gray-100 p-4 rounded hover:scale-105 cursor-pointer duration-300">
                        <img src={Profile} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Kelapa Sawit</h3>
                        <p className="text-gray-700">Tanaman Penghasil Nabati</p>
                    </a>
                    <a href="#BuahSawit" className="bg-gray-100 p-4 rounded hover:scale-105 cursor-pointer duration-300">
                        <img src={buah} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Buah Sawit</h3>
                        <p className="text-gray-700">Manfaat & Hasil</p>
                    </a>
                    <a href="#PekerjaSawit" className="bg-gray-100 p-4 rounded hover:scale-105 cursor-pointer duration-300">
                        <img src={hasil} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Pekerja Kelapa Sawit</h3>
                        <p className="text-gray-700">Dampak & Lapangan Pekerja</p>
                    </a>
                    
                </div>
            </div>
        </section>
     )
}

export default Projects;


