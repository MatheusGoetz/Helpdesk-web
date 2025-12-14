import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth-routes";
import { ClientRoute } from "./client-routes";

export function Routes() {
	return (
		<BrowserRouter>
			<AuthRoutes />
		</BrowserRouter>
	);
}
