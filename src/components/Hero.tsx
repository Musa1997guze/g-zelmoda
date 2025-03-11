import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="relative h-screen" ref={ref}>
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Fashion collection"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Discover Your Style
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl">
              Explore our new collection featuring timeless pieces crafted with precision and care.
            </p>
            <div className="mt-10 flex space-x-4">
              <Link
                to="/new"
                className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md"
              >
                Shop New Arrivals
              </Link>
              <Link
                to="/collection"
                className="inline-block bg-transparent px-8 py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-200 rounded-md"
              >
                View Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;