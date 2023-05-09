import { Canvas } from '@react-three/fiber'
import Model from './components/Lsw'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="bg-orange-50 h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
