import React from "react";
import { Routes, Route } from "react-router-dom";
import Authlayout from "./pages/auth/Authlayout";
import LoginAccount from "./pages/auth/LoginAccount";
import CreateAccount from "./pages/auth/create_account/CreateAccount";
import CreateCompany from "./pages/auth/create_account/CreateCompany";
import CreateApplicant from "./pages/auth/create_account/CreateApplicant";
import Mainlayout from "./pages/main/Mainlayout";
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";

export default function App() {
	return( 
	<Routes>
		{/* Authentication routes */}
		<Route path="/auth" element={<Authlayout/>}>
			<Route path="login" element={<LoginAccount/>} />
			<Route path="create" element={<CreateAccount/>} />
			<Route path="create-company" element={<CreateCompany/>} />
			<Route path="create-applicant" element={<CreateApplicant/>} />
		</Route>

		<Route path="/" element={<Mainlayout/>}>
			<Route path="" element={<Home/>} />
			<Route path="profile" element={<Profile/>} />
		</Route>
	</Routes>
);
}
