import GuildNav from "../../components/GuildNav";
import TooltipLayer from "../../components/TooltipLayer";

interface ChannelsLayoutProps {
  children: React.ReactNode;
}

export default function ChannelsLayout({ children }: ChannelsLayoutProps) {
  return (
    <div className="flex h-full">
      <GuildNav />
      {children}
      <TooltipLayer />
    </div>
  );
}
