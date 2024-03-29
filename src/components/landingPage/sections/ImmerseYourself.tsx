import Image from "next/image"
import PageHeader from "../PageHeader"

const ImmerseYourself = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 py-10 flex flex-col my-16 lg:w-4/5 xl:px-28 lg:px-12 px-8 mx-auto gap-20" id="audioBible">
            {/* Section 1 */}
            <div className="lg:col-span-1 mt-20 order-2 xl:lg:order-1">
                <Image src={'/images/scripture.svg'} height={500} width={500} alt="" />
            </div>

            {/* Section 2 */}
            <div className="lg:col-span-1 flex justify-center flex-col order-1 xl:lg:order-2">
                <div className="xl:w-[70%]">
                    <PageHeader bigTitle={'Immerse Yourself on the Go'} smallTitle={'AUDIO BIBLE'} />
                </div>
                <p>Listen to the entire Bible, from Genesis to Revelation, narrated professionally with the Audio Bible. Perfect for commutes, workouts, or quiet moments on the move. Let the Word resonate with you wherever life takes you.</p>
            </div>
        </div>
    )
}

export default ImmerseYourself