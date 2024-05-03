import Image from "next/image"
import PageHeader from "../PageHeader"

const ListenBible = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 py-10 flex flex-col my-16 lg:w-4/5 xl:px-28 lg:px-12 px-8 mx-auto lg:gap-20 gap-4" id="audioBible">
            <div className="lg:col-span-1 md:mt-20 mt-0 order-2 lg:order-1 flex justify-center">
                <Image src={'/images/audioBible.gif'} height={500} width={500} alt="" />
            </div>
            <div className="lg:col-span-1 flex justify-center flex-col order-1 lg:order-2">
                <div className="xl:w-[70%] md:mt-0 mt-12">
                    <PageHeader bigTitle={'Listen to the Bible'} smallTitle={'AUDIO BIBLE'} />
                </div>
                <p>Listen to the entire Bible, from Genesis to Revelation, narrated professionally in various languages. Perfect for auditory learners or those with visual impairments, this feature allows you to engage with the Scripture in a new way. </p>
            </div>
        </div>
    )
}

export default ListenBible