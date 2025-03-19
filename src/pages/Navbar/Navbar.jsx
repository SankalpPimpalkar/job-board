import React, { useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Briefcase className="h-7 w-7 text-gray-600 mr-2" />
            <span className="text-2xl font-extrabold text-gray-800">
              JobBoard
            </span>
          </div>

          
          <div className="hidden md:flex space-x-8">
            {["Find Jobs", "Companies", "Career Advice", "Salary Guide"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 text-lg font-medium hover:text-gray-400 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>

       
          <div className="hidden md:flex space-x-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition shadow-md transform hover:scale-105">
                 Post a Job
               </button>

               <button className=" text-gray-800 px-4 py-2 rounded-lg border border-gray-800 transition shadow-md transform hover:scale-105">
                 Sign In
               </button>               
          </div>

          {/* hide pane button created for menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-7 w-7 transition-transform transform rotate-180" />
              ) : (
                <Menu className="h-7 w-7 transition-transform transform rotate-0" />
              )}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden bg-white shadow-md mt-2 rounded-lg">
            <div className="flex flex-col space-y-2">
              {["Find Jobs", "Companies", "Career Advice", "Salary Guide"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-purple-50 hover:text-gray-400 transition duration-300"
                  >
                    {item}
                  </a>
                )
              )}
               <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition shadow-md transform hover:scale-105">
                 Post a Job
               </button>

               <button className=" text-gray-800 px-4 py-2 rounded-lg border border-gray-800 transition shadow-md transform hover:scale-105">
                 Sign In
               </button>  
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default  Navbar;