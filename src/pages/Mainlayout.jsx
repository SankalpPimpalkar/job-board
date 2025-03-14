import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Mainlayout() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const cookieFallback = localStorage.getItem("cookieFallback");

		if ((!cookieFallback || cookieFallback == "[]") && location.pathname.startsWith != "/auth") {
			navigate("/auth/login");
			return;
		} else if (cookieFallback || location.pathname.startsWith == "/auth") {
			navigate("/");
		}
	}, [navigate]);

	return <Outlet />;
}
