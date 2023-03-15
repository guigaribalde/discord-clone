import Item from "./Item";

interface GuildsData {
  id: string;
  name: string;
  image?: string;
  meta?: {
    hasUnreadMessages: boolean;
  };
}

interface ServerListProps {
  guilds: GuildsData[];
  setActiveGuild: (id: string) => void;
  activeGuild: string;
}

export default function ServerList({
  guilds,
  setActiveGuild,
  activeGuild,
}: ServerListProps) {
  const handleGuildClick = (id: string) => {
    setActiveGuild(id);
  };

  return (
    <ul className="flex flex-col gap-2">
      {guilds.map((guild) => (
        <Item
          key={guild.id}
          isActive={activeGuild === guild.id}
          onClick={() => {
            handleGuildClick(guild.id);
          }}
          hasUnreadMessages={guild.meta?.hasUnreadMessages}
          name={guild.name}
          image={guild.image}
        />
      ))}
    </ul>
  );
}

/* <div class="theme-dark layer-2aCOJ3 disabledPointerEvents-2AmYRc" style="position: absolute; left: 80px; top: 96px;">
	<div class="tooltip-14MtrL tooltipRight-2TSb42 tooltipPrimary-3qLMbS tooltipDisablePointerEvents-1huO19 listItemTooltip-eHcnUw" style="opacity: 1; transform: none;">
		<div class="tooltipPointer-3L49xb" style="top: calc(50% + 0px);"></div>
		<div class="tooltipContent-Nejnvh">
			<div class="row-x_t5Ya rowGuildName-21wur6">
				<span class="guildNameText-jBFbNC guildNameTextLimitedSize-3jKqMf">Discípulos De Alek</span>
				</div>
				<div class="row-x_t5Ya">
					<svg class="activityIcon-vfIBet rowIcon-2tDEcE" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
						</path>
					</svg>
					<div class="container-1jha_j size24-9rrwDS" aria-expanded="false">
						<svg width="24" height="24" class="avatarContainerMasked-13fYnN" viewBox="0 0 24 24">
							<foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
								<img src="https://cdn.discordapp.com/avatars/261558340323115008/3f87b9be1831318c074e5c54dcf1d268.webp?size=24" alt="Drogadogor" class="avatar-3TrM7c">
							</foreignObject></svg><svg width="24" height="24" class="avatarContainerMasked-13fYnN" viewBox="0 0 24 24">
							<foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
								<img src="https://cdn.discordapp.com/avatars/306844546250178560/0fa96c0e3ad05a28ce18c4cd76d3f6ac.webp?size=24" alt="Guiga" class="avatar-3TrM7c">
							</foreignObject></svg><svg width="24" height="24" class="avatarContainerMasked-13fYnN" viewBox="0 0 24 24">
							<foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
								<img src="https://cdn.discordapp.com/avatars/275072573778296832/9f637c23f02549d45fd11e9d03cf6d16.webp?size=24" alt="Medeiros" class="avatar-3TrM7c">
							</foreignObject>
							</svg>
							<div class="avatarContainer-gPrCzX">
								<img src="https://cdn.discordapp.com/avatars/261580321668071434/4da0940b218923ab84c44411a3113af1.webp?size=24" alt="Rhaduan ?" class="avatar-3TrM7c">
							</div>
						</div>
					</div>
					<div class="row-x_t5Ya">
						<svg class="activityIcon-vfIBet rowIcon-2tDEcE" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
							<path d="M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z" fill="currentColor"></path>
							<path d="M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z" fill="currentColor"></path>
						</svg>
						<div class="container-1jha_j size24-9rrwDS" aria-expanded="false">
							<div class="avatarContainer-gPrCzX">
								<img src="https://cdn.discordapp.com/avatars/292503621650743296/ae417b920121bbac3c3134e3bb22cc94.webp?size=24" alt="ZarasClean" class="avatar-3TrM7c">
							</div>
						</div>
					</div>
					<div class="text-xs-normal-3O7EaX muteText-13RgwP muteTextWithActivity-27eAze" data-text-variant="text-xs/normal" style="color: var(--text-muted);">Silenciado(a)</div>
				</div>
		</div>
</div> */
