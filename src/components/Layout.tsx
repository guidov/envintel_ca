import { Outlet } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20 bg-gradient-to-b from-green-900 to-green-700">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-400" />
          <span className="text-2xl font-bold text-white">ENVINTEL</span>
        </div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-green-400 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-green-400 transition-colors">About</Link>
            <Link to="/blog" className="text-white hover:text-green-400 transition-colors">Blog</Link>
            <a href="http://localhost:5173/weather-wizard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">Weather Wizard</a>
          </div>
          <Link 
            to="/contact" 
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <Outlet />
      
      <Footer />
    </div>
  );
}
