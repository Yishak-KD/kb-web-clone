import Image from "next/image"
import PageHeader from "../PageHeader"

const HowItStarted = () => {
    return (
        <div className="xl:w-[90%] xl:mt-52 mt-32 mb-28 lg:px-32 px-8 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center">
                    <div>
                        <PageHeader bigTitle={'How It Started'} smallTitle={'KEDUS BIBLE'} />
                    </div>
                    <p>
                        Kedus Bible has its roots in the cherished childhood memories of its founder. Growing up, he experienced the profound impact of nightly family prayer sessions - a tradition passed down from his grandparents and lovingly upheld by his mother. Every evening, his family of seven would gather, each member sharing a Bible verse and uniting in prayer. These moments shaped his spiritual journey and left a lasting impression.
                    </p>
                </div>
                <div>
                    <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" className="flex mx-auto"/>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-20 lg:mt-20">
                <div>
                    <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" className="lg:block hidden"/>
                </div>
                <div className="flex items-center">Years later, as a college student studying Computer Science, he created the first version of Kedus Bible from a passion for daily devotional practices and a shared love of the Bible. Today, Kedus Bible has over [number] active users across Android and iOS, proving its impact on individuals seeking a deeper connection with the scriptures. Our mission remains steadfast: to make the Bible accessible to all, empowering individuals and families to embark on their personal journeys of faith
                </div>
            </div>
        </div>
    )
}

export default HowItStarted