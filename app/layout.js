import './globals.css';
import SmoothScroll from '../components/SmoothScroll'; 
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Vibrant Snacks | E-Commerce',
  description: 'Snacks that get you buzzing!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Changed to a clean white background with dark text */}
      <body className="bg-white text-zinc-900 antialiased overflow-x-hidden font-sans">
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}