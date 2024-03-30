'use client'
import Footer from "@/components/landingPage/footer/Footer"
import Navigation from "@/components/landingPage/navigation/Navigation"
import Legal from "@/components/legal/Legal"
import TermsOfUse from "@/components/legal/TermsOfUse"

const Terms = () => {
    return (
        <>
            <Navigation />
            {/* <TermsOfUse /> */}
            <Legal title="Terms of Use"/>
            <Footer />
        </>
)}

export default Terms