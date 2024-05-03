'use client'
import Footer from "./footer/Footer"
import Navigation from "./navigation/Navigation"
import About from "./sections/About"
import Benefits from "./sections/Benefits"
import Contact from "./sections/Contact"
import DailyInspirations from "./sections/DailyInspirations"
import Donate from "./sections/Donate"
import ExploreScripture from "./sections/ExploreScripture"
import HeroSection from "./sections/HeroSection"
import ListenBible from "./sections/ListenBible"
import MakeBibleYourOwn from "./sections/MakeBibleYourOwn"
import LocatePassage from "./sections/LocatePassage"
import { useEffect } from "react"
import { initGA } from "../../../util/analytics"

const LandingPage = () => {
    useEffect((): void => {
        initGA();
    }, []);
    return (
        <div className="relative">
            <div className="z-0 absolute right-0 lg:top-[-30px] md:top-[-300px] top-[-250px] h-[85vh] w-[50vw]">
                <img src="/images/ellipse.svg" alt="" className="h-full w-full" />
            </div>
            <div className="z-10 relative">
                <Navigation />
                <HeroSection />
                <About />
                <ExploreScripture />
                <ListenBible />
                <DailyInspirations />
                <MakeBibleYourOwn />
                <LocatePassage />
                <Benefits />
                <Donate />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage