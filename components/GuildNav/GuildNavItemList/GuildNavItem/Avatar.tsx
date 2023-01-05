interface AvatarProps {
	hover: boolean;
	image?: string;
	name: string;
	isActive?: boolean;
}

interface AvatarImageProps {
	image?: string;
	name: string;
	backgroundColorStyle: string;
	roundedStyle: string;
}

function AvatarImage({ image, name, backgroundColorStyle, roundedStyle }: AvatarImageProps) {

	const nameInitials = name
		.split(" ")
		.map((word) => word[0])
		.join("");
	if(!image) return (
		<div 
			className={`w-12 h-12 font-medium ${backgroundColorStyle} flex justify-center items-center transition-all duration-200 ease-in-out`}
		>
			<span className="text-custom_white-500">{nameInitials}</span>
		</div>
	);
	return (
		<img src={image} alt={name} className={`w-12 h-12 ${roundedStyle}`} />
	);
}

export default function Avatar({ hover, image, name, isActive }: AvatarProps) {
	const roundedStyle = `rounded-full ${hover || isActive ? "rounded-2xl" : ""}`;
	const backgroundColorStyle = `${isActive || hover ? "bg-brand-500" : "bg-primary_dark-600"}`;
		

	return (
		<div
			className={`w-12 h-12 ${roundedStyle} mx-auto overflow-hidden`}
		>
			<AvatarImage name={name} image={image} roundedStyle={roundedStyle} backgroundColorStyle={backgroundColorStyle}/>
		</div>
	);
}
