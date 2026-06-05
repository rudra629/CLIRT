'use client';
import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="min-h-screen pt-32 px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light tracking-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {/* Fake Item 1 */}
          <div className="flex gap-6 border-b border-white/10 pb-8">
            <div className="w-32 h-40 bg-zinc-900 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" alt="Item" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-light">Obsidian Chronograph</h3>
                <p className="text-gray-500 text-sm mt-1">Matte Black / One Size</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 border border-white/20 px-4 py-2">
                  <button className="text-gray-500 hover:text-white">-</button>
                  <span className="text-sm">1</span>
                  <button className="text-gray-500 hover:text-white">+</button>
                </div>
                <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-white underline">Remove</button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg">$450</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900/50 p-8 h-fit border border-white/5">
          <h2 className="text-xl font-light mb-6">Order Summary</h2>
          <div className="space-y-4 text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-white">$450</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-white">Calculated at checkout</span>
            </div>
          </div>
          <div className="flex justify-between text-lg mb-8">
            <span>Total</span>
            <span>$450</span>
          </div>
          <button className="w-full py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Proceed to Checkout
          </button>
          <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest underline transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}