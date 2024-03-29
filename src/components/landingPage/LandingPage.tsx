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
import ImmerseYourself from "./sections/ImmerseYourself"
import MakeBibleYourOwn from "./sections/MakeBibleYourOwn"
import UncoverHidden from "./sections/UncoverHidden"

const LandingPage = () => {
    return (
        <div className="relative">
            <div className="z-0 absolute right-0 lg:top-[-30px] md:top-[-300px] top-[-250px] h-[85vh] w-[50vw]">
                <img src="/images/ellipse.svg" alt="" className="h-full w-full"/>
            </div>
           <div className="z-10 relative">
            <Navigation />
            <HeroSection />
            <About />
            <ExploreScripture />
            <ImmerseYourself />
            <DailyInspirations />
            <MakeBibleYourOwn />
            <UncoverHidden />
            <Benefits />
            <Donate />
            <Contact />
            <Footer />
           </div>
        </div>
    )
}

export default LandingPage