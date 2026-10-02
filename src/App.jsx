import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import AllProjects from "./sections/AllProjects"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { useRoute } from "./hooks/useRoute"

const App = () => {
    const route = useRoute();
    const prevRoute = useRef(route);

    // Handle scrolling when switching between the home page and "All Projects".
    useEffect(() => {
        const prev = prevRoute.current;
        prevRoute.current = route;

        if (route === "projects") {
            window.scrollTo({ top: 0, behavior: "instant" });
            return;
        }

        // Back on home: go to the section in the URL (#work, #contact...).
        // If there is none (e.g. browser "back" button), return to the showcase.
        const hashId = window.location.hash.slice(1);
        const targetId = hashId && !hashId.startsWith("/")
            ? hashId
            : prev === "projects" ? "work" : null;

        if (!targetId) return;

        const raf = requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView();
            ScrollTrigger.refresh();
        });

        return () => cancelAnimationFrame(raf);
    }, [route]);

    return (
        <>
            <NavBar />

            {route === "projects" ? (
                <AllProjects />
            ) : (
                <>
                    <Hero />
                    <ShowcaseSection />
                    <LogoSection />
                    <FeatureCards />
                    <ExperienceSection />
                    <TechStack />
                    <Contact />
                </>
            )}

            <Footer />
        </>
    )
}

export default App
