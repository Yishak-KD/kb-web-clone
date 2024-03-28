import Image from "next/image"
import PageHeader from "../PageHeader"

const UncoverHidden = () => {
    return (
        <div className="xl:w-[90%] xl:mt-52 mt-32 mb-28 lg:px-44 px-8 mx-auto lg:grid lg:grid-cols-2 flex flex-col gap-10">
            <div className="col-span-1 flex flex-col justify-center xl:lg:pl-10">
                <PageHeader bigTitle={'Uncover Hidden Depths'} smallTitle={'ADVANCE SEARCH'} />
                <p className="xl:max-w-[95%]">Find what you seek instantly with the powerful search function. Explore keywords, phrases, or even entire verses, and see results illuminate across translations and books. Delve deeper and unlock the richness of scripture.</p>
            </div>
            <div className="col-span-1 lg:mt-[-50px]">
                <Image src={'/images/bibleverse.svg'} height={800} width={800} alt="" />
            </div>
        </div>
    )
}

export default UncoverHidden