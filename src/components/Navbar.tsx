import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          GIG-GLE
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/discover" className="hover:text-purple-400 transition">Discover</Link>
          <Link to="/how-it-works" className="hover:text-purple-400 transition">How It Works</Link>
          <Link to="/hire" className="hover:text-purple-400 transition">Hire Talent</Link>
          <Link to="/jobs" className="hover:text-purple-400 transition">Find Work</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/auth" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition">
            Sign In
          </Link>
          <button className="md:hidden p-2 hover:bg-gray-800 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};