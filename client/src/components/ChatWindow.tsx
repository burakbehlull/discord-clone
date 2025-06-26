import React from 'react';
import { Server, DM, ViewMode, ChatWindowProps } from '@types';

interface ChatWindowProps {
  view: ViewMode;
  activeServer?: Server;
  activeDM?: DM;
  currentUser: { name: string; avatar: string };
  setProfileModalUser: (user: any) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  view,
  activeServer,
  activeDM,
  currentUser,
  setProfileModalUser,
}) => {
  const messages =
    view === 'server' ? activeServer?.messages : activeDM?.messages;

  return (
    <div className="flex-1 flex flex-col bg-discord-300 p-4 overflow-hidden">
      {view === 'dm' && activeDM && (
        <div className="flex items-center justify-between border-b border-discord-500/40 pb-3 mb-4 px-2">
          <div className="flex items-center space-x-3">
            <img
              src={activeDM.avatar}
              alt={activeDM.name}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setProfileModalUser(activeDM)}
            />
            <div className="text-white font-medium text-sm">@{activeDM.name}</div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages && messages.length > 0 ? (
          messages.map((msg, i) => (
            <div key={i}>
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-medium text-sm">{currentUser.name}</span>
                <span className="text-xs text-discord-500">18:23</span>
              </div>
              <p className="text-discord-600 text-sm ml-1">{msg}</p>
            </div>
          ))
        ) : (
          <p className="text-discord-500 text-sm">Mesaj bulunamadı.</p>
        )}
      </div>

      <div className="mt-4">
        <input
          className="w-full px-4 py-2 rounded bg-discord-100 text-white placeholder:text-discord-500 focus:outline-none focus:ring-2 focus:ring-discord-400"
          placeholder="Mesaj yaz..."
        />
      </div>
    </div>
  );
};

export default ChatWindow;
