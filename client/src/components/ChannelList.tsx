

const ChannelList : React.FC<> = ({view, dms})=> {
	return (
		<div className="text-sm px-3 py-1 rounded hover:bg-discord-700 text-discord-600 hover:text-white cursor-pointer">
			  # genel
			</div>
			<div className="text-sm px-3 py-1 rounded hover:bg-discord-700 text-discord-600 hover:text-white cursor-pointer">
			  # sohbet
			</div>
			<div className="text-sm px-3 py-1 rounded hover:bg-discord-700 text-discord-600 hover:text-white cursor-pointer">
			  # komutlar
			</div>
		  </div>
		) : view === 'dm' ? (
		  <div className="w-64 bg-discord-100 p-4 text-discord-600 flex flex-col justify-between overflow-y-auto">
			<div>
			  <div className="flex justify-between items-center mb-2">
				<p className="font-bold text-white text-xs tracking-wide uppercase">Direkt Mesajlar</p>
				<button
				  className="text-white text-lg hover:text-discord-400"
				  title="Yeni DM Başlat"
				>
				  +
				</button>
			  </div>

			  <div className="space-y-1">
				{dms.map((dm) => (
				  <div
					key={dm.id}
					onClick={() => handleDMClick(dm.id)}
					className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${
					  activeDmId === dm.id
						? 'bg-discord-700 text-white'
						: 'hover:bg-discord-700 hover:text-white'
					}`}
				  >
					<img
					  src={dm.avatar}
					  alt={dm.name}
					  className="w-8 h-8 rounded-full"
					/>
					<div className="flex-1">
					  <p className="text-sm font-medium">{dm.name}</p>
					  <p className="text-xs text-discord-500">
						{dm.status}
					  </p>
					</div>
				  </div>
				))}
			  </div>
			</div>
	)
}

export default ChannelList