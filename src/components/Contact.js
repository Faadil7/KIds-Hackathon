import React from "react";

const Contact = () => {
   return(
    <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800"> Contact Me</h2>
            <p className="text-4xl mb-4 text-gray-600">
                Feel free to leave a message
            </p>
            <a href="mailto:frgaming84@gmail.com" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-3 rounded-lg shadow-md transition duration-300">
                Send Mail
            </a>

        </div>

    </section>
   )
}

export default Contact