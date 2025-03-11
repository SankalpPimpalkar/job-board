import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../../appwrite/functions";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginAccount() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await loginAccount(formData);

			if (response.success) {
				toast.success("Login successful!");
				navigate("/"); // Redirect to home page or MainLayout
			} else {
				toast.error("Invalid credentials. Please try again.");
			}
		} catch (error) {
			toast.error("Failed to login. Please check your details.");
		}
	};

	return (
		<div className="border border-dark-gray/20 p-5 rounded-md w-full max-w-lg">
			<h1 className="text-2xl font-bold text-dark-gray mb-4">
				Login Account
			</h1>
			<p className="text-sm mb-4 text-dark-gray/80">
				Welcome back! Please enter your email and password to access
				your account and continue your journey with us.
			</p>

			<form onSubmit={handleLogin}>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-dark-gray mb-1"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
						placeholder="Enter your email"
						required
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-dark-gray mb-1"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
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
					Login
				</button>
			</form>

			<p className="text-sm text-start mt-4">
				Don't have an account?{" "}
				<Link
					to={"/auth/create"}
					className=" font-semibold hover:underline focus:outline-none"
				>
					Create Account
				</Link>
			</p>
		</div>
	);
}
