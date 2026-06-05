import './globals.css';
import SmoothScroll from '../components/SmoothScroll'; 
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { CartProvider } from '../components/CartContext'; // ADD THIS

export const metadata = {
  title: 'Vibrant Snacks | E-Commerce',
  description: 'Snacks that get you buzzing!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="bg-white text-zinc-900 antialiased overflow-x-hidden font-sans min-h-screen">
        <CartProvider>
          <SmoothScroll>
            <Navbar />
            <PageTransition>
              {children}
              <Footer />
            </PageTransition>
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}