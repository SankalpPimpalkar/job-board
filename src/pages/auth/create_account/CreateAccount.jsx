import { Building, UserRound } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

export default function CreateAccount() {

	return (
		<div className="border border-dark-gray/20 p-6 rounded-md w-full max-w-lg mx-auto">
			<h1 className="text-2xl font-bold text-dark-gray mb-4">
				Create Account
			</h1>
			<p className="text-sm text-dark-gray mb-6">
				Choose your account type to get started. Select the option that
				best describes you.
			</p>

			<div className="space-y-4">
				{/* Company Account Block */}
				<Link
					to={"/auth/create-company"}
					className="p-6 block border border-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors"
				>
					<div className="flex items-center space-x-4">
						<Building className="w-14 h-14 text-inidgo-light/70 p-1 py-2 text-center stroke-2 rounded-full" />

						<div>
							<h2 className="text-lg font-semibold text-dark-gray">
								Company
							</h2>
							<p className="text-sm text-dark-gray/70">
								Create an account to post jobs, manage
								applications, and grow your team.
							</p>
						</div>
					</div>
				</Link>

				{/* Applicant Account Block */}
				<Link
					to={"/auth/create-applicant"}
					className="p-6 block border border-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors"
				>
					<div className="flex items-center space-x-4">
						{/* Logo or Icon for Applicant */}
						<div className="flex items-center space-x-4">
							<UserRound className="w-14 h-14 text-inidgo-light/70 p-1 py-2 text-center stroke-2 rounded-full" />
						</div>

						<div>
							<h2 className="text-lg font-semibold text-dark-gray">
								Applicant
							</h2>
							<p className="text-sm text-dark-gray/70">
								Create an account to apply for jobs, track
								applications, and advance your career.
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
