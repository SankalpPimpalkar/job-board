// src/components/Footer.jsx
import React from "react";
import { Briefcase } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-12 text-center text-black text-sm w-full">
     
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-4 border-t border-gray-300">

     
        <div className="flex items-center space-x-2">
          <Briefcase className="text-lg" />
          <span className="font-semibold text-black">JobBoard</span>
        </div>

      
        <div className="flex flex-wrap justify-center space-x-4 text-sm">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        <p className="text-xs md:text-sm text-gray-500">
          &copy; 2025 JobBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
