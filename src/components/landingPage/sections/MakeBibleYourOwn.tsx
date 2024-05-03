import Image from "next/image"
import PageHeader from "../PageHeader"

const MakeBibleYourOwn = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 py-20 lg:w-4/5 w-full gap-20 lg:px-0 px-8 flex flex-col mx-auto">
            <div className="col-span-1 order-2 lg:order-none flex justify-center">
                <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" />
            </div>
            <div className="col-span-1 flex flex-col my-auto">
                <div className="lg:w-[70%]">
                    <PageHeader bigTitle={'Highlights and Note Taking'} smallTitle={'MAKE THE BIBLE YOUR OWN'} />
                </div>
                <p className="lg:max-w-[80%]">Highlight your favorite passages for reference and take down notes to capture your thoughts and reflections. Easily revisit your highlights and notes at anytime to refresh your memory.</p>
            </div>
        </div>
    )
}

export default MakeBibleYourOwn