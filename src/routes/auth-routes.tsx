import { Routes, Route } from "react-router";

import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { NotFound } from "../pages/NotFound";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="/" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
