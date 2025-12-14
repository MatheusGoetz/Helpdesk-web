export function NotFound() {
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<main className="w-full flex flex-col items-center justify-center">
				<h1 className="font-extrabold text-4xl p-6">
					Ops! Parece que a página que você tentou acessar não existe...
				</h1>
				<a
					href="/"
					className=" border font-bold text-2xl text-center m-8 p-2 rounded-2xl border-gray-800 text-white bg-gray-800 hover:opacity-50 transition ease-linear"
				>
					Voltar para tela de autenticação
				</a>
			</main>
		</div>
	);
}
