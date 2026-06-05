'use client';
import Link from 'next/link';
import { ShoppingBag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext'; // IMPORT CART

export default function Navbar() {
  const { cartCount } = useCart(); // GET ACTUAL COUNT

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-md"
    >
      <Link href="/" className="text-3xl font-black tracking-tighter text-[#C8102E]">
        NAME!
      </Link>

      {/* Made buttons highly visible pill-shapes */}
      <div className="hidden md:flex gap-4 text-xs font-black uppercase text-zinc-800">
        <Link href="/" className="px-5 py-2 rounded-full bg-zinc-100 hover:bg-[#C8102E] hover:text-white transition-colors">Shop Snacks</Link>
        <Link href="#" className="px-5 py-2 rounded-full bg-zinc-100 hover:bg-[#C8102E] hover:text-white transition-colors">Our Story</Link>
        <Link href="#" className="px-5 py-2 rounded-full bg-zinc-100 hover:bg-[#C8102E] hover:text-white transition-colors">Find a Store</Link>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="p-2 text-zinc-800 hover:text-[#C8102E] transition-colors">
          <Search className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <Link href="/cart" className="relative group p-2">
          <ShoppingBag className="w-6 h-6 text-zinc-800 group-hover:text-[#C8102E] transition-colors" strokeWidth={2} />
          
          {/* Animated Badge that pops when items are added */}
          <motion.span 
            key={cartCount}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 bg-[#0081C8] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
          >
            {cartCount}
          </motion.span>
        </Link>
      </div>
    </motion.nav>
  );
}