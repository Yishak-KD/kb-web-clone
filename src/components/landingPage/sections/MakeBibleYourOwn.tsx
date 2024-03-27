import Image from "next/image"
import PageHeader from "../PageHeader"

const MakeBibleYourOwn = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 py-20 lg:w-4/5 w-full gap-20 lg:px-0 px-8 flex flex-col mx-auto">
            {/* Section 1 */}
            <div className="col-span-1 order-2 lg:order-none">
                <Image src={'/images/makeBibleyourown.svg'} height={500} width={500} alt="" />
            </div>

            {/* Section 2 */}
            <div className="col-span-1 flex flex-col">
                <div className="lg:w-[70%]">
                    <PageHeader bigTitle={'Make the Bible Your Own'} smallTitle={'HIGHLIGHTS AND NOTE TAKING'} />
                </div>
                <p className="lg:max-w-[80%]">Highlight verses that touch your soul, capture your insights, and build a personalized tapestry of your faith journey with the highlights and note-taking feature. Create a dynamic Bible study experience that grows with you.</p>
            </div>
        </div>
    )
}

export default MakeBibleYourOwn