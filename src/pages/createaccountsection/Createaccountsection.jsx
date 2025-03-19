// src/components/CallToAction.jsx
import React from "react";

function Createaccountsection() {
  return (
    <div className="bg-white py-12 px-6 rounded-lg text-center mt-8 ">
      <h2 className="text-3xl font-bold mb-4">Join Thousands of Job Seekers</h2>
      <p className="text-gray-600 mb-6">
        Create your free account today and get access to thousands of jobs from
        top companies.
      </p>

      <div className="flex justify-center space-x-4">
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Create an Account
        </button>
        <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
          For Employers
        </button>
      </div>
    </div>
  );
}

export default Createaccountsection

