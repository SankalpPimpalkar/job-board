import React, { useState } from "react";

function FeatureJobCard() {
  // Dummy job data
  const jobData = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Acme Inc",
      location: "San Francisco, CA (Remote)",
      description:
        "We're looking for a Senior Software Engineer to join our team. You'll be responsible for designing, developing, and implementing software solutions.",
      tags: ["Full-time", "React", "Node.js", "5+ years"],
      salary: "$120,000 - $150,000",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "TechCorp",
      location: "New York, NY",
      description:
        "Seeking an experienced Product Manager to oversee product development and lead cross-functional teams.",
      tags: ["Full-time", "Agile", "5+ years"],
      salary: "$110,000 - $130,000",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Remote",
      description:
        "Join our design team and create amazing user experiences for our clients.",
      tags: ["Contract", "Figma", "3+ years"],
      salary: "$70,000 - $90,000",
    },
  ];

  
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <section className="py-12">
      <h1 className="mb-6 font-bold text-2xl text-black text-left w-full pl-10">
        Featured Jobs
      </h1>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 items-center justify-center">
          {jobData.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl mx-auto relative border border-gray-200 hover:shadow-2xl transition"
            >
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                New
              </span>

              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {job.company} • {job.location}
              </p>

              <p className="text-gray-700 mt-2 mb-4 leading-relaxed text-sm">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-300 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto border-t pt-4">
                <p className="text-gray-800 font-medium text-sm">{job.salary}</p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}

          {/* Pagination Section */}
          <div className="flex items-center space-x-2 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => handlePageClick(activePage > 1 ? activePage - 1 : 1)}
              className={`bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition ${
                activePage === 1 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={activePage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-lg transition ${
                  activePage === page
                    ? "bg-black text-white" // Highlight active page
                    : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            
            <button
              onClick={() => handlePageClick(activePage < 3 ? activePage + 1 : 3)}
              className={`bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition ${
                activePage === 3 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={activePage === 3}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureJobCard;
