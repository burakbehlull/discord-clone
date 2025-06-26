import React from 'react';
import { Server, ViewMode } from '@types';

const ServerList: React.FC<ServerListProps> = ({ servers, view, activeServerId, setView, setActiveServerId, toggleModal }) => {
  return (
    <div className="w-16 bg-discord-200 flex flex-col items-center py-4 space-y-3 overflow-y-auto">
      <button
        className="w-12 h-12 bg-discord-100 text-white text-xl rounded-full hover:bg-discord-400 flex items-center justify-center"
        onClick={() => setView('dm')}
      >
        💬
      </button>
      {servers.map((s) => (
        <button
          key={s.id}
          className={`w-12 h-12 text-white text-xl rounded-full flex items-center justify-center ${
            view === 'server' && activeServerId === s.id
              ? 'bg-discord-400'
              : 'bg-discord-100 hover:bg-discord-400'
          }`}
          onClick={() => {
            setView('server');
            setActiveServerId(s.id);
          }}
        >
          {s.icon}
        </button>
      ))}
      <button
        className="w-12 h-12 bg-discord-100 text-white text-xl rounded-full hover:bg-discord-400 flex items-center justify-center"
        onClick={toggleModal}
      >
        +
      </button>
    </div>
  );
};

export default ServerList;
