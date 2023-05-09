import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './components/Lsw'
import { OrbitControls } from '@react-three/drei'
import Sidebar from './components/Sidebar'
import { ISidebarContent } from './interfaces/sidebarContent'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [sidebarContent, setSidebarContent] = useState<ISidebarContent>({ img: "", header: "", preContent: "", content: "" })

  return (
    <div className="select-none">
      <Sidebar openSidebar={openSidebar} sidebarContent={sidebarContent} setOpenSidebar={setOpenSidebar} />
      <div className="w-screen h-screen fixed bg-orange-50 -z-10">
        <Canvas>
          <ambientLight />
          <Model openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} setSidebarContent={setSidebarContent} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default App
