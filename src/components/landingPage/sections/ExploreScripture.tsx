import Image from "next/image"
import PageHeader from "../PageHeader"

const ExploreScripture = () => {
    return (
        <div className="relative w-full lg:space-y-0 space-y-6 xl:px-64 lg:px-32 px-8 mx-auto lg:grid lg:grid-cols-2" id="features">
            <img src="/images/ellipse3.svg" alt="" className="absolute z-0 top-24 lg:left-[-15px] left-[-65px]" />
            <div className="lg:col-span-1 col-span-2 z-10">
                <div className="z-10 relative xl:mt-36 lg:mt-12 mt-36">
                    <div className="lg:w-[70%]">
                        <PageHeader bigTitle={'Multiple Languages'} smallTitle={'EXPLORE SCRIPTURE IN YOUR LANGUAGE'} width={'80%'} />
                    </div>
                    <p className="lg:w-[90%]">{`Explore the timeless wisdom, guidance, and inspiration of the Scripture in your native language for deeper understanding. Amharic (የድሮ ትርጉም እና አዲሱ መደበኛ ትርጉም), Afaan Oromo, Tigrigna, English and more to come.`}</p>
                </div>
            </div>
            <div className="relative lg:col-span-1 col-span-2">
                <Image src={'/images/explorescripture.gif'} height={200} width={200} alt="" className="w-full h-full" layout={'responsive'} unoptimized/>
            </div>
        </div>
    )
}

export default ExploreScripture