import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './components/Lsw'
import { OrbitControls } from '@react-three/drei'
import Sidebar from './components/Sidebar'
import { ISidebarContent } from './interfaces/sidebarContent'
import { BiHide } from 'react-icons/bi'
import { IoEyeSharp } from 'react-icons/io5'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [sidebarContent, setSidebarContent] = useState<ISidebarContent>({ img: "", header: "", preContent: "", content: "" })
  const [openUI, setOpenUI] = useState(true)

  return (
    <div className="select-none">
      <div className="fixed top-0 right-0 p-3">
        <button onClick={() => setOpenUI(!openUI)} className="bg-blue-700 text-white p-2 rounded-md">{openUI ? <BiHide /> : <IoEyeSharp />}</button>
      </div>
      <Sidebar openSidebar={openSidebar} sidebarContent={sidebarContent} setOpenSidebar={setOpenSidebar} />
      <div className="w-screen h-screen fixed bg-orange-50 -z-10">
        <Canvas>
          <ambientLight />
          <Model openUI={openUI} setOpenSidebar={setOpenSidebar} setSidebarContent={setSidebarContent} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default App
