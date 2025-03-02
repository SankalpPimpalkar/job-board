import React from "react";
import { Outlet } from "react-router-dom";

export default function Authlayout() {
	return (
		<div className="w-full min-h-dvh flex flex-col items-center justify-center">
			<Outlet />
		</div>
	);
}
