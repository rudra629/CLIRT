'use client';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-md"
    >
      {/* Playful Bold Logo */}
      <Link href="/" className="text-3xl font-black tracking-tighter text-[#C8102E]">
        BAZANA!
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase text-zinc-800">
        <Link href="/" className="hover:text-[#C8102E] transition-colors">Shop Snacks</Link>
        <Link href="#" className="hover:text-[#C8102E] transition-colors">Our Story</Link>
        <Link href="#" className="hover:text-[#C8102E] transition-colors">Find a Store</Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C8102E] hover:scale-105 transition-transform"
          >
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover"/>
          </button>
        </div>

        <Link href="/cart" className="relative group p-2">
          <ShoppingBag className="w-6 h-6 text-zinc-800 group-hover:text-[#C8102E] transition-colors" strokeWidth={2} />
          <span className="absolute top-0 right-0 bg-[#0081C8] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}