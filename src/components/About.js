import React from "react";
import Profile from "../asset/Pekerja Sawit.jpeg"

const About = () => {
      return(
        <section id="about" className="py-20 bg-green-950">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-white">
                    Tentang Materi di Web Saya
                </h2>
                <div className="flex flex-col items-center mb-12">
                    <img src={Profile} alt="Profile Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-white mb-2"></p>
                    <p className="text-xl text-white font-semibold">Kelapa sawit (Elaeis guineensis) telah menjadi salah satu komoditas utama di Indonesia sejak tahun 1970-an. Tanaman ini tumbuh subur di daerah tropis, dan iklim Indonesia yang ideal menjadikannya sebagai lokasi yang sempurna untuk budidaya. Saya tertarik dengan potensi kelapa sawit dalam meningkatkan kesejahteraan masyarakat, terutama bagi petani kecil.</p>

                </div>
                
                <p className="text-lg-gray-600 mt-8"> 
                   
                </p>

            </div>

        </section>
      )
}

export default About;