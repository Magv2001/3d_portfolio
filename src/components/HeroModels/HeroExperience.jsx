import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room"
import HeroLights from "./HeroLights"
import { useInView } from "../../hooks/useInView"

// Tweak these to resize / move the room.
const ROOM_SCALE = { desktop: 0.65, mobile: 0.4 };
const ROOM_POSITION = [0, -2.75, 0];

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [ref, inView] = useInView();

    return (
        <div ref={ref} style={{ width: "100%", height: "100%" }}>
            <Canvas
                // Stop rendering while the hero is scrolled out of view.
                frameloop={inView ? "always" : "never"}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 15], fov: 45 }}
            >
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

                <ambientLight intensity={0.8} />
                <HeroLights />

                <group
                    scale={isMobile ? ROOM_SCALE.mobile : ROOM_SCALE.desktop}
                    position={ROOM_POSITION}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Canvas>
        </div>
    )
}

export default HeroExperience
