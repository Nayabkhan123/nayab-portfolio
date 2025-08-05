import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]]?.reset().play()
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={2.3}
      />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
