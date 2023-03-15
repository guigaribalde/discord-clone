import Image from "next/image";

interface AvatarImageProps {
  image?:
    | React.FunctionComponent<React.SVGAttributes<SVGElement> & { alt: string }>
    | string;
  name: string;
  backgroundColorStyle: string;
  roundedStyle: string;
  avatarTextColor: string;
}

export default function AvatarImage({
  image,
  name,
  backgroundColorStyle,
  roundedStyle,
  avatarTextColor,
}: AvatarImageProps) {
  const nameInitials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  if (!image)
    return (
      <div
        className={`w-12 h-12 font-medium ${backgroundColorStyle} flex justify-center items-center transition-all duration-200 ease-in-out`}
      >
        <span className={avatarTextColor}>{nameInitials}</span>
      </div>
    );
  if (typeof image === "function") {
    const ImageComponent = image as React.FunctionComponent<
      React.SVGAttributes<SVGElement> & { alt: string }
    >;
    return (
      <div
        className={`w-12 h-12 font-medium ${backgroundColorStyle} flex justify-center items-center transition-all duration-200 ease-in-out`}
      >
        <ImageComponent alt={name} className={`h-5 ${avatarTextColor}`} />
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      className={`w-12 h-12 ${roundedStyle}`}
      width={48}
      height={48}
    />
  );
}

AvatarImage.defaultProps = {
  image: undefined,
};
