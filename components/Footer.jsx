export default function Footer() {
  return (
    <footer className="bg-[#C8102E] text-white pt-20 pb-10 px-8 mt-auto border-t-8 border-[#FFC220]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        <div>
          <h2 className="text-5xl font-black tracking-tighter mb-4">NAME!</h2>
          <p className="font-medium opacity-90 leading-relaxed">
            The power of roasted crunch. Not fried, just full of flavor.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4 font-bold text-lg">
          <a href="#" className="hover:text-[#FFC220] transition-colors w-fit">INTRO</a>
          <a href="#" className="hover:text-[#FFC220] transition-colors w-fit">YOUR SNACKS</a>
          <a href="#" className="hover:text-[#FFC220] transition-colors w-fit">BUY NOW</a>
          <a href="#" className="hover:text-[#FFC220] transition-colors w-fit">CONTACT US</a>
        </div>

        <div>
          <h3 className="text-xl font-black uppercase mb-6">Follow the Buzz On</h3>
          <div className="flex gap-4">
            {/* Fake Social Icons */}
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#C8102E] transition-colors cursor-pointer font-bold">IG</div>
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#C8102E] transition-colors cursor-pointer font-bold">FB</div>
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#C8102E] transition-colors cursor-pointer font-bold">YT</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-semibold opacity-80 border-t border-white/20 pt-8">
        <p>© 2026 NAME Foods Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}