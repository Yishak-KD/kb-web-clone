import Image from "next/image"
import PageHeader from "../PageHeader"

const ExploreScripture = () => {
    return (
        <div className="relative w-full lg:space-y-0 space-y-6 xl:px-64 lg:px-32 px-8 mx-auto lg:grid lg:grid-cols-2" id="features">
            <img src="/images/ellipse3.svg" alt="" className="absolute z-0 top-24 lg:left-[-15px] left-[-65px]" />
            <div className="lg:col-span-1 col-span-2 z-10">
                <div className="z-10 relative mt-44">
                    <div className="lg:w-[70%]">
                        <PageHeader bigTitle={'Explore Scripture in Your Language'} smallTitle={'MULTIPLE LANGUAGES'} width={'80%'} />
                    </div>
                    <p className="lg:w-[90%]">{`Dive into the richness of God's Word in the language that speaks to your heart - Amharic, English, Afaan Oromo, or Tigrinya and more to come. Enjoy the nuances and beauty of each translation as you deepen your understanding.`}</p>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
                <Image src={'/images/multipledevice.svg'} height={200} width={200} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default ExploreScripture