import Hero from '../components/Hero';

// Fake Product Data
const products = [
  { id: 1, name: "Obsidian Chronograph", price: "$450", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Matte Keycap Set", price: "$120", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Acoustic Over-Ear", price: "$299", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Minimalist Flask", price: "$45", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Product Grid Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Curated Essentials
          </h2>
          <button className="text-sm uppercase tracking-widest border-b border-gray-600 pb-1 hover:border-white transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden mb-4">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-full py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-200">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}