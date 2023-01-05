"use client"

import { useState } from "react";
import GuildNavItem from "./GuildNavItem";

interface GuildsData{
	id: string
	name: string
	meta?: {
		hasUnreadMessages: boolean
	}
}

interface GuildNavItemListProps{
	guilds: GuildsData[]
}

export default function GuildNavItemList({guilds}: GuildNavItemListProps) {
	const [activeGuild, setActiveGuild] = useState("0");

	const handleGuildClick = (id: string) => {
		setActiveGuild(id)
	}

	return (
		<div className="flex flex-col gap-2 h-full">
			{guilds.map((guild) => (
				<GuildNavItem
					key={guild.id}
					id={guild.id}
					isActive={activeGuild === guild.id}
					onClick={()=>{handleGuildClick(guild.id)}}
					hasUnreadMessages={guild.meta?.hasUnreadMessages}
					name={guild.name}
				/>
			))}
		</div>
	);
}
