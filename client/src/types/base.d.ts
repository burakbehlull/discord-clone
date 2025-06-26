import { ViewMode } from "@types"


export type serverResponseProp = {
	id: string,
	name: string,
    status: string,
    avatar: string,
    messages: string[],
	
}

export type ChannelListProp = {
	view: ViewMode,
	activeServer: serverResponseProp
}

export interface ServerListProps {
  servers: Server[];
  view: ViewMode;
  activeServerId: string | null;
  setView: (view: ViewMode) => void;
  setActiveServerId: (id: string) => void;
  toggleModal: () => void;
}

export interface SidebarProps {
  view: ViewMode;
  activeServer?: Server | undefined;
  dms: DM[];
  activeDmId: string | null;
  onDMClick: (id: string) => void;
  currentUser: { name: string; avatar: string };
  setView: (view: ViewMode) => void;
  setProfileModalUser: (user: any) => void;
  setEditProfileModal: (b: boolean) => void;
  setEditedUsername: (name: string) => void;
}

export interface ChatWindowProps {
  view: ViewMode;
  activeServer?: Server;
  activeDM?: DM;
  currentUser: { name: string; avatar: string };
  setProfileModalUser: (user: any) => void;
}

export interface CreateServerModalProps {
  closeModal: () => void;
}