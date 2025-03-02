import React from "react";
import { Link } from "react-router-dom";

export default function LoginAccount() {

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Login logic goes here");
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
					to={'/auth/create'}
					className="text-inidgo-light font-semibold hover:underline focus:outline-none"
				>
					Create Account
				</Link>
			</p>
		</div>
	);
}
