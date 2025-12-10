import { Outlet } from "react-router";

import LogoDarkSvg from "../assets/Logo_IconDark.svg";

import bgScreen from "../assets/Screen.png";

export function AuthLayout() {
	return (
		<div
			className="w-screen h-screen bg-cover bg-center flex justify-end "
			style={{ backgroundImage: `url(${bgScreen})` }}
		>
			<main className="w-5xl mt-8 bg-gray-100 border rounded-t-3xl flex flex-col pt-12 items-center md:min-w-[465px] md:mt-3 md:rounded-s-3xl md:rounded-tr-none">
				<div className="flex justify-center items-center ">
					<img src={LogoDarkSvg} alt="Logo" />
					<h1 className="text-3xl font-bold text-blue-900 p-3">HelpDesk</h1>
				</div>

				<Outlet />
			</main>
		</div>
	);
}
