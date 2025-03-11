import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccountForApplicant } from "../../../appwrite/functions";
import { account } from "../../../appwrite/config"; // Import Appwrite client
import toast from "react-hot-toast";

export default function CreateApplicant() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		number: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await account.deleteSessions().catch(() => {});

			const response = await createAccountForApplicant(formData);

			if (response.success) {
				toast.success(
					"Account created successfully! Redirecting to login..."
				);
				setTimeout(() => navigate("/auth/login"), 1500); // Delay for smooth UX
			} else {
				toast.error(
					response.message || "Failed to create applicant account."
				);
			}
		} catch (error) {
			if (error.message.includes("Unauthorized")) {
				toast.error("You are not authorized to perform this action.");
			} else {
				toast.error("An error occurred. Please try again.");
			}
			console.error("Error creating Applicant account:", error);
		}
	};

	return (
		<div className="border border-dark-gray/20 p-5 rounded-md w-full max-w-lg">
			<h2 className="text-2xl font-bold text-dark-gray mb-4">
				Applicant Sign Up
			</h2>
			<p className="text-sm mb-4 text-dark-gray/80">
				Please fill in your details to create an applicant account.
			</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-dark-gray mb-1">
						Name
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
						placeholder="Enter your name"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-dark-gray mb-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-dark-gray mb-1">
						Phone Number
					</label>
					<input
						type="tel"
						name="number"
						value={formData.number}
						onChange={handleChange}
						className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
						placeholder="Enter your phone number"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-dark-gray mb-1">
						Password
					</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
						placeholder="Enter your password"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full font-medium bg-inidgo-light text-white py-2 rounded-md hover:bg-inidgo-light/90 transition-colors"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}
