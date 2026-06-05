'use client';
import { useState } from 'react';
import Hero from '../components/Hero';
import { useCart } from '../components/CartContext';

const products = [
  { id: 1, name: "Roasted Salted Almonds", price: 450, img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80" },
  { id: 2, name: "Spicy Masala Cashews", price: 550, img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&q=80" },
  { id: 3, name: "Sweet Chilli Makhana", price: 200, img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&q=80" },
  { id: 4, name: "Peri Peri Peanuts", price: 150, img: "https://images.unsplash.com/photo-1536585141940-0259b1dc92f7?w=800&q=80" },
];

// New component specifically to handle the button animation state
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    // Reset the button back to normal after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={handleAddToCart}
            className={`w-full py-3 font-black text-sm uppercase rounded-full transition-all duration-300 shadow-lg ${
              isAdded 
                ? 'bg-green-500 text-white scale-105 shadow-green-500/50' 
                : 'bg-[#C8102E] text-white hover:bg-[#A00D24]'
            }`}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <h3 className="text-xl font-black text-zinc-900">{product.name}</h3>
      <p className="text-lg font-bold text-[#F26522] mt-1">₹{product.price}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <section className="py-32 px-8 max-w-7xl mx-auto bg-white">
        <div className="flex justify-between items-end mb-16 border-b-4 border-[#FFC220] pb-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 uppercase">
            Grab a Bite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}