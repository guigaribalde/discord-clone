import AvatarImage from "./Image";

interface AvatarProps {
  hover: boolean;
  image?:
    | React.FunctionComponent<React.SVGAttributes<SVGElement> & { alt: string }>
    | string;
  name: string;
  isActive?: boolean;
  isMouseDown?: boolean;
}

export default function Avatar({
  isActive = false,
  isMouseDown = false,
  image = undefined,
  hover,
  name,
}: AvatarProps) {
  const roundedStyle = `transition-all duration-200 ease-in-out ${
    hover || isActive ? "rounded-2xl" : "rounded-3xl"
  }`;
  const backgroundColorStyle = `${
    isActive || hover ? "bg-brand-500" : "bg-primary_dark-600"
  }`;
  const avatarTextColor = `${
    isActive || hover ? "text-white" : "text-custom_white-500"
  }`;

  const translateStyle = isMouseDown ? "custom-translate" : "";

  return (
    <div
      className={`w-12 h-12 mx-auto overflow-hidden ${roundedStyle} ${translateStyle}`}
    >
      <AvatarImage
        name={name}
        image={image}
        roundedStyle={roundedStyle}
        backgroundColorStyle={backgroundColorStyle}
        avatarTextColor={avatarTextColor}
      />
    </div>
  );
}
