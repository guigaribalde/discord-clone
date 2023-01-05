import GuildNav from "../../components/GuildNav";

interface ChannelsLayoutProps {
	children: React.ReactNode;
}

export default function ChannelsLayout({ children }: ChannelsLayoutProps) {
	return (
		<div className="flex h-full">
			<GuildNav />
			{children}
		</div>
	);
}
