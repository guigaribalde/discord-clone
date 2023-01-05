"use client";

import { useState } from "react";
import Avatar from "./Avatar";
import Pill from "./Pill";

interface GuildNavItemProps {
	hasUnreadMessages?: boolean;
	id: string;
	name: string;
	onClick?: () => void;
	isActive?: boolean;
}

export default function GuildNavItem({ hasUnreadMessages, onClick, isActive, name }: GuildNavItemProps) {
	const [isHovered, setIsHovered] = useState(false);
	const setIsHoveredTrue = () => setIsHovered(true);
	const setIsHoveredFalse = () => setIsHovered(false);
	return (
		<div
			className="w-[72px] relative hover:cursor-pointer"
			onMouseEnter={setIsHoveredTrue}
			onMouseLeave={setIsHoveredFalse}
			onClick={onClick}
		>
			<Pill hover={isHovered} isVisible={hasUnreadMessages} isActive={isActive} />
			<Avatar hover={isHovered} isActive={isActive} name={name} />
		</div>
	);
}
