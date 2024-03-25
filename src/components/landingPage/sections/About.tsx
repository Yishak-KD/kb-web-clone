import PageHeader from "../PageHeader"

const About = () => {
    return (
        <div className="lg:w-[55%] lg:px-0 px-8 items-center mx-auto lg:text-center lg:my-52 my-28">
            <PageHeader bigTitle={'Kedus Bible'} smallTitle={'ABOUT'} />
            <p className="leading-7 text-lg">We are committed to making the Bible accessible to everyone, regardless of their age, technical skills, or native language. We believe that the Bible is a powerful tool for spiritual growth and transformation, and we want to help people experience it for themselves.
            </p>
        </div>
    )
}

export default About