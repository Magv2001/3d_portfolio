import { useEffect, useRef, useState } from "react";

// Tells whether an element is on screen (with a small margin), and whether it
// has ever been on screen. Used to pause / lazy-mount the WebGL canvases.
export const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
                if (entry.isIntersecting) setHasBeenInView(true);
            },
            { rootMargin: "200px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView, hasBeenInView];
};
