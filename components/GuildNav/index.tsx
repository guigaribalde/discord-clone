import GuildNavItemList from "./GuildNavItemList";

const guildsData = [{
	id: '1',
	name: 'TESTE 1',
	meta: {
		hasUnreadMessages: true,
	}
},{
	id: '2',
	name: 'TESTE 2',
	meta: {
		hasUnreadMessages: false,
	}
},{
	id: '3',
	name: 'TESTE 3',
	meta: {
		hasUnreadMessages: false,
	}
},{
	id: '4',
	name: 'TESTE 4',
	meta: {
		hasUnreadMessages: true,
	}
},
]

export default function GuildNav() {
	return (
		<div className="bg-primary_dark-700 h-full">
			<GuildNavItemList guilds={guildsData} />
		</div>
	);
}
