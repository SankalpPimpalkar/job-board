import React from "react";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
	return (
		<div>
			Mainlayout
			<Outlet />
		</div>
	);
}
