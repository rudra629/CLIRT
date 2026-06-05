'use client';
import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5"
    >
      {/* Logo */}
      <Link href="/" className="text-xl tracking-widest font-light uppercase text-white">
        Aura.
      </Link>

      {/* Center Links (Hidden on mobile for simplicity) */}
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Shop</Link>
        <Link href="#" className="hover:text-white transition-colors">Collections</Link>
        <Link href="#" className="hover:text-white transition-colors">Journal</Link>
      </div>

      {/* Right Icons: Profile & Cart */}
      <div className="flex items-center gap-6">
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700 hover:border-white transition-colors">
          {/* Fake Profile Picture */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
        <Link href="/cart" className="relative group">
          <ShoppingBag className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
          <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}