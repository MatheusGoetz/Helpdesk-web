import { Routes, Route } from "react-router";

import { ClientPage } from "../pages/ClientPage";
import { HeaderLayout } from "../components/HeaderLayout";

export function ClientRoute() {
	return (
		<Routes>
			<Route path="/" element={<HeaderLayout />}>
				<Route path="/" element={<ClientPage />} />
			</Route>
		</Routes>
	);
}
