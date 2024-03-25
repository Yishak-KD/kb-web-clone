import Image from "next/image"
import PageHeader from "../PageHeader"

const Benefits = () => {
    return (
        <div className="bg-[#F6F6F6] lg:my-20 w-full lg:px-10 px-8 lg:py-44 py-20 lg:text-center" id="benefits">
            <div className="lg:w-2/4 mx-auto mb-20">
                <PageHeader bigTitle={'Benefits'} smallTitle={'ABOUT'} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quam doloremque natus voluptate unde, sint ratione officia beatae porro vero. Quos architecto quibusdam et voluptate ipsum totam dolorem doloribus nulla.</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:w-[90%] flex flex-col items-center gap-14 mx-auto">
                <div className="col-span-1">
                    <Image src={'/images/community.svg'} height={400} width={400} alt="" />
                </div>
                <div className="col-span-1">
                    <Image src={'/images/personalization.svg'} height={400} width={400} alt="" />
                </div>
                <div className="col-span-1">
                    <Image src={'/images/convenience.svg'} height={400} width={400} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Benefits