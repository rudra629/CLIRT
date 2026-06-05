'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-20">
      
      {/* Left Side: White Background, Red Text */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-[#C8102E] leading-[0.9] uppercase"
        >
          Snacks <br /> That Get <br /> You Buzzing!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-zinc-600 font-medium"
        >
          Let's meet your Not Fried, No Oil Snacks!
        </motion.p>
      </div>

      {/* Right Side: Bright Blue Background */}
      <div className="w-full md:w-1/2 bg-[#0081C8] flex flex-col justify-center items-center p-12 relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 drop-shadow-lg">
            Roasted Salted <br/> Almonds!
          </h2>
          
          {/* Fun, Pill-Shaped Button */}
          <button className="px-10 py-4 bg-transparent border-4 border-white text-white font-black text-lg rounded-full hover:bg-white hover:text-[#0081C8] transition-all duration-300 transform hover:scale-105">
            BUY NOW
          </button>
        </motion.div>

        {/* Fake floating snack element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}