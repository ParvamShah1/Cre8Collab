import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">Cre<span className="text-white">8</span>Collab</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHomePage ? (
                <>
                  <a href="#hero" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                  <a href="#features" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Features</a>
                  <a href="#howItWorks" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">How It Works</a>
                  <a href="#testimonials" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Testimonials</a>
                </>
              ) : (
                <Link to="/" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</Link>
              )}
              <Link to="/pricing" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
              {isHomePage && (
                <a href="#statistics" className="hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200">Statistics</a>
              )}
              <Link 
                to="/register" 
                className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {isHomePage ? (
            <>
              <a href="#hero" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Home</a>
              <a href="#features" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Features</a>
              <a href="#howItWorks" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">How It Works</a>
              <a href="#testimonials" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Testimonials</a>
            </>
          ) : (
            <Link to="/" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Home</Link>
          )}
          <Link to="/pricing" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Pricing</Link>
          {isHomePage && (
            <a href="#statistics" className="block hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200">Statistics</a>
          )}
          <Link 
            to="/register" 
            className="block mt-2 w-full bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-200"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;