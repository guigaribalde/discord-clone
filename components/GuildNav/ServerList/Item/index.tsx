import { useState } from "react";
import Avatar from "./Avatar";
import Pill from "./Pill";
import Tooltip from "./Tooltip";

interface ServerItemProps {
  hasUnreadMessages?: boolean;
  name: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  image?:
    | React.FunctionComponent<React.SVGAttributes<SVGElement> & { alt: string }>
    | string;
}

export default function ServerItem({
  hasUnreadMessages,
  onClick,
  isActive,
  name,
  className,
  image,
}: ServerItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const setIsMouseDownTrue = () => setIsMouseDown(true);
  const setIsMouseDownFalse = () => setIsMouseDown(false);

  const setIsHoveredTrue = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    // todo: this console show the position of the mouse when hovering over the server item
    // todo: we need to use this to position the tooltip
    console.log(event);
    setIsHovered(true);
  };
  const setIsHoveredFalse = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={`list-none w-[72px] relative hover:cursor-pointer ${
        className || ""
      }`}
      onClick={onClick}
      onMouseEnter={setIsHoveredTrue}
      onMouseLeave={setIsHoveredFalse}
      onMouseDown={setIsMouseDownTrue}
      onMouseUp={setIsMouseDownFalse}
      role="presentation"
    >
      <Pill
        hover={isHovered}
        isVisible={hasUnreadMessages}
        isActive={isActive}
      />
      <Avatar
        hover={isHovered}
        isActive={isActive}
        isMouseDown={isMouseDown}
        name={name}
        image={image}
      />
      <Tooltip />
    </li>
  );
}

ServerItem.defaultProps = {
  hasUnreadMessages: false,
  isActive: false,
  className: "",
  image: undefined,
  onClick: () => {},
};
