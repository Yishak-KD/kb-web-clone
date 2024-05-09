import Image from "next/image"
import PageHeader from "../PageHeader"

const HowItStarted = () => {
    return (
        <div className="xl:w-[90%] xl:mt-52 mt-32 mb-28 lg:px-32 px-8 mx-auto">
            <div className="grid lg:grid-cols-5 gap-20">
                <div className="flex flex-col justify-center col-span-3">
                    <div>
                        <PageHeader bigTitle={'How It Started'} smallTitle={'KEDUS BIBLE'} />
                    </div>
                    <div className="font-sans font-bold text-4xl text-[#6e6e6e]">01</div>
                    <p className="font-sans text-xl">
                        Kedus Bible has its roots in the cherished childhood memories of its founder. Growing up, he experienced the profound impact of nightly family prayer sessions - a tradition passed down from his grandparents and lovingly upheld by his mother. Every evening, his family of seven would gather, each member sharing a Bible verse and uniting in prayer. These moments shaped his spiritual journey and left a lasting impression.
                    </p>
                </div>
                <div className="col-span-2">
                    <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" className="flex mx-auto" />
                </div>
            </div>
            <div className="grid lg:grid-cols-5 gap-20 lg:mt-20">
                <div className="col-span-2">
                    <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" className="lg:block hidden" />
                </div>
                <div className="flex flex-col col-span-3">
                    <div className="font-sans font-bold text-4xl text-[#6e6e6e]">02</div>
                    <div className="flex items-center font-sans text-xl">Years later, as a college student studying Computer Science, he created the first version of Kedus Bible from a passion for daily devotional practices and a shared love of the Bible. Our mission remains steadfast: to make the Bible accessible to all, empowering individuals and families to embark on their personal journeys of faith.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItStarted