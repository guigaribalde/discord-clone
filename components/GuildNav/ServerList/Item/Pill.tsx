interface PillProps {
  hover: boolean;
  isVisible?: boolean;
  isActive?: boolean;
}

export default function Pill({ hover, isVisible, isActive }: PillProps) {
  let heightStyle = "h-2";
  if (isActive) {
    heightStyle = "h-10";
  } else if (hover) {
    heightStyle = "h-5";
  }
  const opacityStyle = `${
    isVisible || hover || isActive ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="absolute flex items-center h-full">
      <span
        className={`w-2 ${opacityStyle} ${heightStyle} rounded-full bg-white -ml-1 transition-all duration-200 ease-in-out`}
      />
    </div>
  );
}

Pill.defaultProps = {
  isVisible: false,
  isActive: false,
};
