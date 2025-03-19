
import React from "react";
import { FaCode, FaPencilRuler, FaBriefcase, FaUniversity, FaHeartbeat, FaGraduationCap, FaBuilding, FaThLarge } from "react-icons/fa";

const categories = [
  { id: 1, icon: <FaCode />, name: "Technology", jobs: "1,245 jobs" },
  { id: 2, icon: <FaPencilRuler />, name: "Design", jobs: "567 jobs" },
  { id: 3, icon: <FaBriefcase />, name: "Marketing", jobs: "832 jobs" },
  { id: 4, icon: <FaUniversity />, name: "Finance", jobs: "475 jobs" },
  { id: 5, icon: <FaHeartbeat />, name: "Healthcare", jobs: "953 jobs" },
  { id: 6, icon: <FaGraduationCap />, name: "Education", jobs: "621 jobs" },
  { id: 7, icon: <FaBuilding />, name: "Real Estate", jobs: "384 jobs" },
  { id: 8, icon: <FaThLarge />, name: "All Categories", jobs: "5,280+ jobs" },
];

function BrowsCategories() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
       
        <h2 className="text-2xl font-bold text-center mb-8">
          Browse Jobs by Category
        </h2>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col  hover:bg-gray-200 items-center space-y-3 transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl text-gray-800">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">{category.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowsCategories;

