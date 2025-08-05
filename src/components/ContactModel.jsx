import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from './Model'
import { OrbitControls, Environment } from '@react-three/drei'

const ContactModel = () => {
  return (
    <div className="w-full max-w-[500px] lg:max-w-[600px] aspect-square mx-auto">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={true} autoRotate autoRotateSpeed={2} />
        <Model/>
      </Canvas>
    </div>
  )
}

export default ContactModel
