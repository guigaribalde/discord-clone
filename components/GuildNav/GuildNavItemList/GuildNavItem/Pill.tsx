interface PillProps {
	hover: boolean;
	isVisible?: boolean;
	isActive?: boolean;
}

export default function Pill({ hover, isVisible, isActive }: PillProps) {
	const heightStyle = `${isActive ? "h-10" : hover ? "h-5" : "h-2"}`;
	const opacityStyle = `${isVisible || hover || isActive ? "opacity-100" : "opacity-0"}`;

	return (
		<div className="absolute flex items-center h-full">
			<span
				className={`w-2 ${opacityStyle} ${heightStyle} rounded-full bg-white -ml-1 transition-all duration-200 ease-in-out`}
			></span>
		</div>
	);
}
