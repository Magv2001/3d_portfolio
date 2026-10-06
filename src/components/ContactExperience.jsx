import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import EmailIcon from "./Models/EmailIcon";
import { useInView } from "../hooks/useInView";

// Tweak this to resize the icon.
const ICON_SCALE = 0.028;

const ContactExperience = () => {
    const [ref, inView, hasBeenInView] = useInView();

    return (
        <div ref={ref} style={{ width: "100%", height: "100%" }}>
            {/* The canvas is only created once the section is near the screen,
                and it stops rendering again when it scrolls out of view. */}
            {hasBeenInView && (
                <Canvas
                    frameloop={inView ? "always" : "never"}
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0, 7], fov: 45 }}
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[3, 4, 5]} intensity={2} />
                    <Environment preset="city" />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1.5}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.7}
                    />

                    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
                        <group scale={ICON_SCALE}>
                            <EmailIcon />
                        </group>
                    </Float>
                </Canvas>
            )}
        </div>
    );
};

export default ContactExperience;
