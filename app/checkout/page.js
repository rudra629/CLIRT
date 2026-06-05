'use client';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen pt-32 px-6 md:px-8 max-w-3xl mx-auto pb-24 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-2">Checkout</h1>
        <p className="text-zinc-500 font-bold">Almost there! Let's get these snacks shipped.</p>
      </div>

      <div className="space-y-8">
        {/* Shipping Form with Fixed Text Colors */}
        <section className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm">
          <h2 className="text-xl font-black text-zinc-900 mb-6 uppercase border-b border-zinc-200 pb-4">Shipping Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 font-bold" />
            <input type="text" placeholder="Last Name" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 font-bold" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 font-bold md:col-span-2" />
            <input type="text" placeholder="Full Address" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 font-bold md:col-span-2" />
          </div>
        </section>

        {/* Payment Form with Fixed Text Colors */}
        <section className="bg-[#FFF8F0] p-8 rounded-3xl border-2 border-[#0081C8] shadow-md">
          <h2 className="text-xl font-black text-[#0081C8] mb-6 uppercase border-b border-[#0081C8]/20 pb-4 flex justify-between items-center">
            Payment Details
            <span className="text-xs bg-white px-2 py-1 rounded text-zinc-500 border border-zinc-200">Secure 🔒</span>
          </h2>
          <div className="space-y-4">
            <input type="text" placeholder="Card Number (0000 0000 0000 0000)" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081C8] focus:ring-2 focus:ring-[#0081C8]/20 font-bold" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081C8] focus:ring-2 focus:ring-[#0081C8]/20 font-bold" />
              <input type="text" placeholder="CVV" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081C8] focus:ring-2 focus:ring-[#0081C8]/20 font-bold" />
            </div>
            <input type="text" placeholder="Name on Card" className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081C8] focus:ring-2 focus:ring-[#0081C8]/20 font-bold" />
          </div>
        </section>

        <div className="flex flex-col-reverse md:flex-row gap-4 items-center pt-4">
          <Link href="/cart" className="w-full md:w-auto px-8 py-4 text-zinc-500 font-bold hover:text-zinc-900 transition-colors text-center">
            Back to Cart
          </Link>
          <button className="w-full flex-1 py-4 px-6 bg-[#C8102E] text-white text-xl font-black uppercase rounded-full hover:bg-[#A00D24] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Pay Now & Submit Order
          </button>
        </div>
      </div>
    </main>
  );
}