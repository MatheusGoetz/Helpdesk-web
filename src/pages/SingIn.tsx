import { Input } from "../components/input";
import { Button } from "../components/Button";

export function SignIn() {
	return (
		<div>
			<div className="w-[532px] mt-6 p-6 border rounded-2xl items-center justify-center border-gray-300 md:p-8 md:w-[643px]">
				<h1 className="text-2xl font-bold md:text-4xl">Acesse o Portal</h1>
				<p className="mt-1 text-gray-400">
					Entre usando seu e-mail e senha cadastrados
				</p>
				<form className="w-full flex flex-col gap-4 mt-8">
					<Input
						type="email"
						required
						legend="e-mail"
						placeholder="seu@email.com"
					/>

					<Input
						type="password"
						required
						legend="password"
						placeholder="senha"
					/>

					<Button className="w-full bg-gray-900 text-white font-bold mt-10 h-10 rounded-[5px] cursor-pointer hover:bg-gray-700 transition ease-linear">
						Entrar
					</Button>
				</form>
			</div>
			<div className="w-[532px] mt-6 p-6 border rounded-2xl items-center justify-center border-gray-300 md:p-8 md:w-[643px]">
				<h1 className="text-2xl font-bold md:text-4xl">
					Ainda não tem um conta?
				</h1>
				<p className="mt-1 text-gray-400">Cadastre agora mesmo</p>
				<Button className="w-full bg-gray-300 text-gray-900 font-bold mt-10 h-10 rounded-[5px] cursor-pointer hover:bg-gray-400 transition ease-linear">
					Criar conta
				</Button>
			</div>
		</div>
	);
}
