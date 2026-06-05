'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-[#f4f4f5] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618090584126-129cd1f3f319?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury background"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={itemVariants} className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-400">
          The New Standard
        </motion.p>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-light tracking-tighter mb-6"
        >
          Elevate Your <br /> Experience.
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-10">
          <button className="group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Explore Collection
            </span>
            <div className="absolute inset-0 h-full w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}