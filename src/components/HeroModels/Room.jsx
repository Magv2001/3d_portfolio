/*
 * "Low Poly Room" by Ralph_SwH (CC BY 4.0)
 * https://sketchfab.com/3d-models/low-poly-room-6efd70b753f24ed2b12541e43154ffdd
 *
 * Optimized with gltf-transform (meshopt + WebP textures + instancing).
 * Credits are shown in the footer (see constants/index.js -> modelCredits).
 */
import { useGLTF } from "@react-three/drei";

const ROOM_URL = "/models/low-poly-room.glb";

export function Room(props) {
    const { scene } = useGLTF(ROOM_URL);

    return <primitive object={scene} {...props} />;
}

useGLTF.preload(ROOM_URL);
