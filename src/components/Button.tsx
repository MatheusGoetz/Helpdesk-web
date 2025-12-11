type Props = React.ComponentProps<"button"> & {
	isLoading?: boolean;
};

export function Button({
	children,
	isLoading,
	type = "button",
	...rest
}: Props) {
	return (
		<button type={type} disabled={isLoading} {...rest}>
			{children}
		</button>
	);
}
