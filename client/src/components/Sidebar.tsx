import React from 'react';
import { ViewMode, Server, DM } from '@types';

const Sidebar: React.FC<SidebarProps> = ({
  view,
  activeServer,
  dms,
  activeDmId,
  onDMClick,
  currentUser,
  setView,
  setProfileModalUser,
  setEditProfileModal,
  setEditedUsername,
}) => {
  if (view === 'server' && activeServer) {
    return (
      <div className="w-64 bg-discord-100 p-4 text-discord-600 flex flex-col space-y-2 overflow-y-auto">
        <div className="font-bold text-white text-xs tracking-wide uppercase mb-2">
          {activeServer.name}
        </div>
        {['# genel', '# sohbet', '# komutlar'].map((channel) => (
          <div
            key={channel}
            className="text-sm px-3 py-1 rounded hover:bg-discord-700 text-discord-600 hover:text-white cursor-pointer"
          >
            {channel}
          </div>
        ))}
      </div>
    );
  }

  if (view === 'dm') {
    return (
      <div className="w-64 bg-discord-100 p-4 text-discord-600 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-white text-xs tracking-wide uppercase">Direkt Mesajlar</p>
            <button className="text-white text-lg hover:text-discord-400" title="Yeni DM Başlat">+</button>
          </div>

          <div className="space-y-1">
            {dms.map((dm) => (
              <div
                key={dm.id}
                onClick={() => {
                  setView('dm');
                  onDMClick(dm.id);
                }}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${
                  activeDmId === dm.id ? 'bg-discord-700 text-white' : 'hover:bg-discord-700 hover:text-white'
                }`}
              >
                <img src={dm.avatar} alt={dm.name} className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{dm.name}</p>
                  <p className="text-xs text-discord-500">{dm.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center p-3 mt-4 bg-discord-200 rounded-lg space-x-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1" onClick={() => setProfileModalUser(currentUser)}>
            <p className="text-white text-sm font-medium">{currentUser.name}</p>
          </div>
          <button
            className="text-white hover:text-discord-400"
            title="Ayarlar"
            onClick={() => {
              setEditedUsername(currentUser.name);
              setEditProfileModal(true);
            }}
          >
            ⚙️
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Sidebar;
