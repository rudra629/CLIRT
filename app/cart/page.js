'use client';
import Link from 'next/link';
import { useCart } from '../../components/CartContext'; // IMPORT CART

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  return (
    <main className="min-h-screen pt-32 px-8 max-w-7xl mx-auto pb-24 bg-white">
      <h1 className="text-5xl font-black text-zinc-900 mb-12 uppercase tracking-tight">Your Cart</h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-8">
            {/* MAP OVER ACTUAL CART ITEMS */}
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 border-b border-zinc-200 pb-8">
                <div className="w-full md:w-32 h-48 md:h-40 bg-zinc-100 rounded-xl flex-shrink-0 overflow-hidden shadow-inner">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{item.name}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 md:mt-4">
                    <div className="flex items-center gap-4 bg-zinc-100 rounded-full px-4 py-2 font-bold shadow-sm">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-zinc-500 hover:text-[#C8102E] text-xl w-6">-</button>
                      <span className="text-zinc-900 w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-zinc-500 hover:text-[#0081C8] text-xl w-6">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm font-bold uppercase text-zinc-400 hover:text-[#C8102E] underline">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-left md:text-right py-2">
                  <p className="text-2xl font-black text-zinc-900">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DYNAMIC ORDER SUMMARY */}
          <div className="bg-[#FFF8F0] p-8 rounded-3xl border-2 border-[#F26522] h-fit shadow-xl">
            <h2 className="text-2xl font-black text-zinc-900 mb-6 uppercase">Order Summary</h2>
            <div className="space-y-4 font-semibold text-zinc-600 mb-8 border-b border-zinc-200 pb-8">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items)</span>
                <span className="text-zinc-900">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-zinc-900">Free</span>
              </div>
            </div>
            <div className="flex justify-between text-3xl font-black text-[#C8102E] mb-8">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            
            <Link href="/checkout" className="block text-center w-full py-4 px-6 bg-[#F26522] text-white text-lg font-black uppercase rounded-full hover:bg-[#D9531E] hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-black text-zinc-400 mb-6">Your cart is empty!</h2>
          <Link href="/" className="px-8 py-4 bg-[#0081C8] text-white font-black rounded-full hover:bg-[#006A9E] transition-colors">
            Go Grab Some Snacks
          </Link>
        </div>
      )}
    </main>
  );
}