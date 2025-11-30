import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'

const AnimatedSphere = () => {
    const mesh = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        mesh.current.rotation.x = t * 0.2
        mesh.current.rotation.y = t * 0.3
    })

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={mesh}>
            <MeshDistortMaterial
                color="#0ea5e9" // Sky-500
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    )
}

const Hero3D = () => {
    return (
        <div className="h-[400px] w-full md:h-[600px] flex items-center justify-center">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}

export default Hero3D
