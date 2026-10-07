import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { useInView } from "../../../hooks/useInView";

// Lives inside <Canvas> so the model loads (and suspends) there.
const Model = ({ model }) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.id === "interactive") {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({ color: "white" })
                }
            })
        }
    }, [scene, model.id])

    return (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    )
}

const TechIcon = ({ model }) => {
    const [ref, inView, hasBeenInView] = useInView();

    return (
        <div ref={ref} style={{ width: "100%", height: "100%" }}>
            {/* With 9 cards there are 9 WebGL canvases: each one is only created
                when its card is near the screen, and it pauses when scrolled away. */}
            {hasBeenInView && (
                <Canvas frameloop={inView ? "always" : "never"} dpr={[1, 1.5]}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />

                    <Environment preset="city" />

                    <OrbitControls enableZoom={false} />

                    <Model model={model} />
                </Canvas>
            )}
        </div>
    )
}

export default TechIcon
