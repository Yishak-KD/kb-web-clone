import Image from "next/image"
import PageHeader from "../PageHeader"

const DailyInspirations = () => {
    return (
        <div className="lg:w-[90%] w-full flex flex-col gap-14 my-20 xl:pt-44 lg:pt-20 pt-16 xl:px-44 lg:px-12 px-8 mx-auto lg:grid lg:grid-cols-2" id="dailyDevotions">
            <div className="col-span-1">
                <div className="xl:w-[70%]">
                    <PageHeader bigTitle={'Daily Inspiration at Your Fingertips'} smallTitle={'DEVOTIONALS WITH NOTIFICATIONS'} />
                </div>
                <p className="lg:max-w-[80%]">Start each day grounded in faith with personalized daily devotionals, delivered straight to your device at your preferred time. Reflect on these thoughtful messages and draw strength and guidance from scripture.</p>
            </div>
            <div className="col-span-1 lg:mt-[-20px]">
                <Image src={'/images/notification.gif'} height={800} width={800} alt="" />
            </div>
        </div>
    )
}

export default DailyInspirations