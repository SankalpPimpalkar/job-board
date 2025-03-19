// src/components/HeroSection.jsx
import React from "react";
import { Search } from "lucide-react";

function Jobsection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-lg">
          Find Your Dream Job Today
        </h1>
        <p className="text-lg text-gray-600 mb-8">
        Connecting Talented Minds with Growing Companies.
        Explore, Apply, and Achieve Success
        </p>

        {/* Search Form */}
        <div className="flex justify-center space-x-2">
        <input
       type="text"
        placeholder="Job title, keywords, or company"
         className="w-full max-w-xs px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-sm bg-white"
       />


          <input
            type="text"
            placeholder="City, state, or remote"
            className="w-full max-w-xs px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400  focus:outline-none bg-white"
          />
             <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition shadow-md transform hover:scale-105">
             <Search className="h-5 w-5 inline mr-1 " />
             Search Jobs
           </button>
        </div>

      
        <div className="mt-6 text-gray-600 space-x-4">
          <span className="text-sm">Popular:</span>
          {["Remote", "Software Engineer", "Marketing", "Data Analyst"].map(
            (tag, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-black hover:underline"
              >
                {tag}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Jobsection;

