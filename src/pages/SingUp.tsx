import { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SingUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navegate = useNavigate();

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log(name, email, password);
	}

	function buttonNave() {
		navegate("/");
	}

	return (
		<div>
			<div className="w-[532px] mt-6 p-6 border rounded-2xl items-center justify-center border-gray-300 md:p-8 md:w-[643px]">
				<h1 className="text-2xl font-bold md:text-4xl">Crie sua conta</h1>
				<p className="mt-1 text-gray-400">Informe seu nome, e-mail e senha</p>
				<form onSubmit={onSubmit} className="w-full flex flex-col gap-4 mt-8">
					<Input
						type="name"
						required
						legend="name"
						placeholder="Digite seu nome"
						onChange={(e) => setName(e.target.value)}
					/>

					<Input
						type="email"
						required
						legend="e-mail"
						placeholder="seu@email.com"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						type="password"
						required
						legend="password"
						placeholder="senha"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button
						type="submit"
						className="w-full bg-gray-900 text-white font-bold mt-10 h-10 rounded-[5px] cursor-pointer hover:bg-gray-700 transition ease-linear disabled:opacity-50 disabled:cursor-progress"
						isLoading={isLoading}
					>
						Cadastrar
					</Button>
				</form>
			</div>
			<div className="w-[532px] mt-6 p-6 border rounded-2xl items-center justify-center border-gray-300 md:p-8 md:w-[643px]">
				<h1 className="text-2xl font-bold md:text-4xl">Já uma conta?</h1>
				<p className="mt-1 text-gray-400">Entre agora mesmo</p>
				<Button
					onClick={buttonNave}
					isLoading={isLoading}
					className="w-full bg-gray-300 text-gray-900 font-bold mt-10 h-10 rounded-[5px] cursor-pointer hover:bg-gray-400 transition ease-linear disabled:opacity-20 disabled:cursor-progress"
				>
					Acessar conta
				</Button>
			</div>
		</div>
	);
}
