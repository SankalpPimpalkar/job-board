// src/components/Filterjob.jsx
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Add this if you want a filter icon

function Filterjob() {
	const [filters, setFilters] = useState({
		fullTime: false,
		partTime: false,
		contract: false,
		internship: false,
		entryLevel: false,
		midLevel: false,
		seniorLevel: false,
		salary1: false,
		salary2: false,
		salary3: false,
		salary4: false,
	});

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setFilters({
			...filters,
			[name]: checked,
		});
	};

	return (
		<div className="bg-white p-6 shadow-md rounded-lg w-full md:w-64 lg:w-72 md:max-w-xs text-left">
			<h2 className="text-xl font-semibold text-gray-800 mb-4 ">
				Filter Jobs
			</h2>

			<div className="flex flex-col space-y-4 items-start">
				<div className="w-full">
					<h3 className="text-black text-lg font-bold mb-2">
						Job Type
					</h3>
					<div className="flex flex-col space-y-2">
						{[
							"Full-time",
							"Part-time",
							"Contract",
							"Internship",
						].map((type, index) => (
							<label
								key={index}
								className="flex items-center space-x-2 text-gray-700"
							>
								<input
									type="checkbox"
									name={type.toLowerCase().replace("-", "")}
									checked={
										filters[
											type.toLowerCase().replace("-", "")
										]
									}
									onChange={handleCheckboxChange}
									className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
								/>
								<span>{type}</span>
							</label>
						))}
					</div>
				</div>

				<div className="w-full">
					<h3 className="text-black text-lg font-bold mb-2">
						Experience Level
					</h3>
					<div className="flex flex-col space-y-2">
						{["Entry Level", "Mid Level", "Senior Level"].map(
							(level, index) => (
								<label
									key={index}
									className="flex items-center space-x-2 text-gray-700"
								>
									<input
										type="checkbox"
										name={level
											.toLowerCase()
											.replace(" ", "")}
										checked={
											filters[
												level
													.toLowerCase()
													.replace(" ", "")
											]
										}
										onChange={handleCheckboxChange}
										className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
									/>
									<span>{level}</span>
								</label>
							)
						)}
					</div>
				</div>

				<div className="w-full">
					<h3 className="text-black text-lg font-bold mb-2">
						Salary Range
					</h3>
					<div className="flex flex-col space-y-2">
						{[
							"$0 - $50,000",
							"$50,000 - $100,000",
							"$100,000 - $150,000",
							"$150,000+",
						].map((salary, index) => (
							<label
								key={index}
								className="flex items-center space-x-2 text-gray-700"
							>
								<input
									type="checkbox"
									name={`salary${index + 1}`}
									checked={filters[`salary${index + 1}`]}
									onChange={handleCheckboxChange}
									className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
								/>
								<span>{salary}</span>
							</label>
						))}
					</div>
				</div>

				{/* Apply Button */}
				<button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-600 transition w-full">
					<FaFilter className="mr-2" />
					Apply Filters
				</button>
			</div>
		</div>
	);
}

export default Filterjob;
