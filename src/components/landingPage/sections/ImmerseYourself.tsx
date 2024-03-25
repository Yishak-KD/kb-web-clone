import Image from "next/image"
import PageHeader from "../PageHeader"

const ImmerseYourself = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 flex flex-col my-20 lg:w-4/5 lg:px-28 px-8 mx-auto gap-20">
            <div className="lg:col-span-1">
                <Image src={'/images/scripture.svg'} height={500} width={500} alt="" />
            </div>
            <div className="lg:col-span-1 flex items-center justify-center flex-col order-1 lg:order-none">
                <PageHeader bigTitle={'Immerse Yourself on the Go'} smallTitle={'AUDIO BIBLE'}/>
                <p>Listen to the entire Bible, from Genesis to Revelation, narrated professionally with the Audio Bible. Perfect for commutes, workouts, or quiet moments on the move. Let the Word resonate with you wherever life takes you.</p>
            </div>
        </div>
    )
}

export default ImmerseYourself