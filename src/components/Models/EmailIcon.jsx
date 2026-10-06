/*
 * "Email_Icon" by Simon.Keating (CC BY 4.0)
 * https://sketchfab.com/3d-models/email-icon-43e4588d176945e889004cf270e17cfa
 *
 * Optimized with gltf-transform (meshopt + WebP textures).
 * Credits are shown in the footer (see constants/index.js -> modelCredits).
 */
import { useGLTF } from "@react-three/drei";

const EMAIL_ICON_URL = "/models/email-icon.glb";

const EmailIcon = (props) => {
    const { scene } = useGLTF(EMAIL_ICON_URL);

    return <primitive object={scene} {...props} />;
};

useGLTF.preload(EMAIL_ICON_URL);

export default EmailIcon;
