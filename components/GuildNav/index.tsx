"use client";

import { useState } from "react";
import ServerList from "./ServerList";
import ServerItem from "./ServerList/Item";
import Separator from "./Separator";
import YetiLogo from "../../assets/icons/yeti_logo.svg";

const guildsData = [
  {
    id: "1",
    name: "TESTE 1",
    meta: {
      hasUnreadMessages: true,
    },
  },
  {
    id: "2",
    name: "TESTE 2",
    meta: {
      hasUnreadMessages: false,
    },
  },
  {
    id: "3",
    name: "TESTE 3",
    meta: {
      hasUnreadMessages: false,
    },
  },
  {
    id: "4",
    name: "TESTE 4",
    meta: {
      hasUnreadMessages: true,
    },
  },
  {
    id: "5",
    name: "TESTE 5",
  },
  {
    id: "6",
    name: "TESTE 6",
  },
  {
    id: "7",
    name: "TESTE 7",
    meta: {
      hasUnreadMessages: true,
    },
    image:
      "https://cdn.discordapp.com/icons/307902237781524480/4dc4827c3ce5202cf1795eebf7dc5c28.webp?size=96",
  },
  {
    id: "8",
    name: "TESTE 8",
  },
  {
    id: "9",
    name: "TESTE 9",
  },
];

export default function GuildNav() {
  const [activeGuild, setActiveGuild] = useState("0");
  const YetiLogoWithType = YetiLogo as React.FunctionComponent<
    React.SVGAttributes<SVGElement> & { alt: string }
  >;

  const handleGuildClick = (id: string) => {
    setActiveGuild(id);
  };
  return (
    <div className="bg-primary_dark-700 h-full pt-3 overflow-y-auto no-scrollbar w-[72px]">
      <ServerItem
        isActive={activeGuild === "0"}
        onClick={() => {
          handleGuildClick("0");
        }}
        hasUnreadMessages={false}
        name="Mensagens diretas"
        className="mb-2"
        image={YetiLogoWithType}
      />
      <Separator />
      <ServerList
        setActiveGuild={setActiveGuild}
        activeGuild={activeGuild}
        guilds={guildsData}
      />
    </div>
  );
}
