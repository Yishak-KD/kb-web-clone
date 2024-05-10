import PageHeader from "../PageHeader"

const About = () => {
    return (
        <div className="lg:w-[55%] lg:px-0 px-8 items-center mx-auto lg:text-center xl:my-44 lg:my-32 my-20">
            <PageHeader bigTitle={'Kedus Bible'} smallTitle={'ABOUT'} width={'full'} />
            <p className="leading-7 text-lg">Our mission is ensuring the transformative power of the scripture is accessible and enriching for everyone. We achieve this by offering the Bible in multiple languages, ensuring everyone can connect with the scripture in their native tongue. Daily devotionals and ever-expanding Bible study resources keep you engaged, empowering you to explore the depths of scripture and deepen your faith journey.
            </p>
        </div>
    )
}

export default About