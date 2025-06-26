import { useState } from "react"

import { ChannelList } from "@components"
import { ViewMode } from "@types"
import { servers } from "@data"


export default function App() {
  const [view, setView] = useState<ViewMode>('server');
  const [activeServerId, setActiveServerId] = useState<string | null>('1');
  
  const activeServer = servers.find((s) => s.id === activeServerId);

  return (
    <>
		<ChannelList view activeServer />
		<h1 className="bg-rose-600 text-bold">Merhaba TailwindCSS! </h1>
    </>
  )
}