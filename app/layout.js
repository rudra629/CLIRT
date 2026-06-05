import './globals.css';
import SmoothScroll from '../components/SmoothScroll'; 
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Premium E-Commerce',
  description: 'Elevate Your Experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}