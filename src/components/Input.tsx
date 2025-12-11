type Props = React.ComponentProps<"input"> & {
	legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
	return (
		<fieldset className="flex flex-1 max-h-20 focus-within:text-blue-600">
			{legend && (
				<legend className="uppercase flex justify-center font-bold text-sm text-inherit">
					{legend}
				</legend>
			)}

			<input
				type={type}
				className="w-full h-12 bg-transparent border-b-2 border-gray-300 text-gray-500 focus-within:text-blue-600 focus:outline-none"
				{...rest}
			/>
		</fieldset>
	);
}
