import Image from "next/image"
import PageHeader from "../PageHeader"

const UncoverHidden = () => {
    return (
        <div className="lg:w-[90%] mt-52 mb-28 lg:px-44 px-8 mx-auto lg:grid lg:grid-cols-2 flex flex-col gap-10">
            <div className="col-span-1 flex flex-col justify-center lg:pl-16">
                <PageHeader bigTitle={'Uncover Hidden Depths'} smallTitle={'ADVANCE SEARCH'} />
                <p className="lg:max-w-[90%]">Find what you seek instantly with the powerful search function. Explore keywords, phrases, or even entire verses, and see results illuminate across translations and books. Delve deeper and unlock the richness of scripture.</p>
            </div>
            <div className="col-span-1 lg:mt-[-50px]">
                <Image src={'/images/bibleverse.svg'} height={800} width={800} alt="" />
            </div>
        </div>
    )
}

export default UncoverHidden