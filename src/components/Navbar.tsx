import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">GüzelModa</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/new" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              New Arrivals
            </Link>
            <Link 
              to="/women" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Women
            </Link>
            <Link 
              to="/men" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Men
            </Link>
            <Link 
              to="/accessories" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Accessories
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="h-6 w-6" />
            </button>
            <Link 
              to="/account" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link 
              to="/wishlist" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/new"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            New Arrivals
          </Link>
          <Link 
            to="/women"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            Women
          </Link>
          <Link 
            to="/men"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            Men
          </Link>
          <Link 
            to="/accessories"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            Accessories
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;