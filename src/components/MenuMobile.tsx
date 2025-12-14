import { useState } from "react";
import { Menu, X } from "lucide-react";

type UserRole = "cliente" | "tecnico" | "admin";

interface MobileMenuProps {
	role: UserRole;
}

export function MenuMobile({ role }: MobileMenuProps) {
	const [open, setOpen] = useState("");

	return (
		<div className="relative">
			<button onClick={() => setOpen(!open)} className="text-white">
				{open ? <X size={28} /> : <Menu size={28} />}
			</button>

			<div></div>
		</div>
	);
}
