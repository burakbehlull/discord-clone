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