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