import { Outlet } from "react-router";
import { MenuMobile } from "./MenuMobile";

import LogoDarkSvg from "../assets/Logo_IconDark.svg";

export function HeaderLayout() {
	return (
		<div>
			<main>
				<div className="flex  justify-between items-center bg-gray-900 p-6">
					<MenuMobile />
					<div className="flex">
						<img src={LogoDarkSvg} alt="Logo" className="w-14 h-14" />
						<div className="ml-3">
							<h1 className="font-bold text-2xl text-white">HelpDesk</h1>
							<p className="text-blue-500 font-extrabold">Cliente</p>
						</div>
					</div>
				</div>

				<Outlet />
			</main>
		</div>
	);
}
