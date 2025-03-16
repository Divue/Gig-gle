import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-gray-900/90" />
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Diverse Talents,<br />
          <span className="text-purple-400">One Gig at a Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          A dedicated platform for disabled individuals and students to showcase their skills and connect with opportunities worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center transition">
            Find Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center transition">
            Hire Talent
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};