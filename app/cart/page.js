'use client';
import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="min-h-screen pt-32 px-8 max-w-7xl mx-auto pb-24">
      <h1 className="text-5xl font-black text-zinc-900 mb-12 uppercase tracking-tight">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items (Light Mode) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex gap-6 border-b border-zinc-200 pb-8">
            <div className="w-32 h-40 bg-zinc-100 rounded-xl flex-shrink-0 p-4 flex items-center justify-center">
              <div className="w-full h-full bg-[#0081C8] rounded-md shadow-inner"></div> {/* Placeholder for snack packet */}
            </div>
            <div className="flex-grow flex flex-col justify-between py-2">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">Roasted Salted Almonds</h3>
                <p className="text-zinc-500 font-medium mt-1">24 Pack / Not Fried</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-4 bg-zinc-100 rounded-full px-4 py-2 font-bold">
                  <button className="text-zinc-500 hover:text-[#C8102E] text-xl">-</button>
                  <span className="text-zinc-900">1</span>
                  <button className="text-zinc-500 hover:text-[#0081C8] text-xl">+</button>
                </div>
                <button className="text-sm font-bold uppercase text-zinc-400 hover:text-[#C8102E] underline">Remove</button>
              </div>
            </div>
            <div className="text-right py-2">
              <p className="text-2xl font-black text-zinc-900">₹450</p>
            </div>
          </div>
        </div>

        {/* Order Summary - Now Vibrant! */}
        <div className="bg-[#FFF8F0] p-8 rounded-3xl border-2 border-[#F26522] h-fit shadow-xl">
          <h2 className="text-2xl font-black text-zinc-900 mb-6 uppercase">Order Summary</h2>
          <div className="space-y-4 font-semibold text-zinc-600 mb-8 border-b border-zinc-200 pb-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-zinc-900">₹450</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-zinc-900">Calculated</span>
            </div>
          </div>
          <div className="flex justify-between text-2xl font-black text-zinc-900 mb-8">
            <span>Total</span>
            <span>₹450</span>
          </div>
          
          {/* THE FIXED BUTTON: Rounded full, responsive text, solid padding */}
          <button className="w-full py-4 px-6 bg-[#F26522] text-white text-lg font-black uppercase rounded-full hover:bg-[#D9531E] hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            Proceed to Checkout
          </button>
          
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm font-bold text-[#0081C8] hover:text-[#C8102E] uppercase underline transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}