import React, { useEffect, useState } from 'react';

import { ServerList, Sidebar, ChatWindow, CreateServerModal, 
	ProfileModal, EditProfileModal } from '@components';

import { DM, Server, ViewMode } from '@types';
import { currentUser, servers, dms } from '@data';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('server');
  const [showModal, setShowModal] = useState(false);
  const [activeServerId, setActiveServerId] = useState<string | null>('1');
  const [activeDmId, setActiveDmId] = useState<string | null>(null);
  const [profileModalUser, setProfileModalUser] = useState<DM | typeof currentUser | null>(null);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [editedUsername, setEditedUsername] = useState(currentUser.name);

  const activeServer = servers.find((s) => s.id === activeServerId);
  const activeDM = dms.find((dm) => dm.id === activeDmId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex h-screen w-screen bg-discord-300 text-discord-600">
      <ServerList
        servers={mockServers}
        view={view}
        activeServerId={activeServerId}
        setView={setView}
        setActiveServerId={setActiveServerId}
        toggleModal={() => setShowModal(!showModal)}
      />

      <Sidebar
        view={view}
        activeServer={activeServer}
        dms={mockDMs}
        activeDmId={activeDmId}
        onDMClick={setActiveDmId}
        currentUser={currentUser}
        setView={setView}
        setProfileModalUser={setProfileModalUser}
        setEditProfileModal={setEditProfileModal}
        setEditedUsername={setEditedUsername}
      />

      <ChatWindow
        view={view}
        activeServer={activeServer}
        activeDM={activeDM}
        currentUser={currentUser}
        setProfileModalUser={setProfileModalUser}
      />

      {showModal && <CreateServerModal closeModal={() => setShowModal(false)} />}

      {profileModalUser && (
        <ProfileModal
          user={profileModalUser}
          close={() => setProfileModalUser(null)}
        />
      )}

      {editProfileModal && (
        <EditProfileModal
          currentUser={currentUser}
          editedUsername={editedUsername}
          setEditedUsername={setEditedUsername}
          close={() => setEditProfileModal(false)}
        />
      )}
    </div>
  );
};

export default App;
