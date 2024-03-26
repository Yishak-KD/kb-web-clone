import Image from "next/image"
import PageHeader from "../PageHeader"

const ExploreScripture = () => {
    return (
        <div className="w-full lg:px-40 px-8 mx-auto lg:grid lg:grid-cols-2 py-10">
            <div className="relative lg:col-span-1 col-span-2 z-10">
                <img src="/images/ellipse3.svg" alt="" className="z-0 absolute bottom-[-200px] lg:left-[-200px] left-[-150px]" />
                <div className="z-10 relative">
                    <PageHeader bigTitle={'Explore Scripture in Your Language'} smallTitle={'MULTIPLE LANGUAGES'} />
                    <p>{`Dive into the richness of God's Word in the language that speaks to your heart - Amharic, English, Afaan Oromo, or Tigrinya and more to come. Enjoy the nuances and beauty of each translation as you deepen your understanding.`}</p>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-2 lg:mt-[-180px]">
                <Image src={'/images/multipledevice.svg'} height={200} width={200} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default ExploreScripture