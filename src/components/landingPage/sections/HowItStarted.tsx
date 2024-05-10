import Image from "next/image"
import PageHeader from "../PageHeader"

interface ProfileData {
    id: number
    imageUrl: string
    bigTitle?: string
    smallTitle?: string
    description: string
    quotedText?: string
}

const ProfileDataList: ProfileData[] = [{
    id: 1,
    imageUrl: '/images/nate1.jpg',
    bigTitle: 'How It Started',
    smallTitle: 'THE JOURNEY',
    description: 'Kedus Bible has its roots in the cherished childhood memories of its founder. Growing up, he experienced the profound impact of nightly family prayer sessions – a tradition passed down from his grandparents and lovingly upheld by his parents. Every evening, his family of seven would gather, each member sharing a Bible verse on their respective days and uniting in prayer. These moments shaped his spiritual journey and left a lasting impression.'
},
{
    id: 2,
    imageUrl: '/images/nate2.jpg',
    description: 'Years later, as a college student studying Computer Science, he created the first version of Kedus Bible. Driven by a mission to make the bible accessible, to foster familial fellowship through daily devotionals, and to provide spiritual resources for communities in East Africa and beyond. Today, Kedus Bible has over 25k and growing users across Android and iOS, shaping the lives of families and individuals that use it.',
    quotedText: '"Our mission remains steadfast, to ensure the transformative power of the scripture is within reach for all." ~Nathenael'
}]

const HowItStarted = () => {
    return (
        <div className="xl:w-[90%] xl:mt-52 mt-32 mb-28 lg:px-32 px-8 mx-auto">

            {ProfileDataList.map((item, id) => (
                <>
                    {item.id % 2 !== 0 ? (
                        <div className="grid lg:grid-cols-5 gap-20 lg:mb-16 mb-0" key={id}>
                            <div className="flex flex-col justify-center col-span-3">
                                <div>
                                    <PageHeader bigTitle={`${item.bigTitle}`} smallTitle={item.smallTitle} />
                                </div>
                                <div>
                                    <div className="font-sans font-bold text-4xl text-[#6e6e6e]">0{item.id}</div>
                                    <p className="font-sans text-xl">{item.description}</p>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-center mx-auto">
                                <Image src={item.imageUrl} height={500} width={500} alt="" className="mx-auto" />
                            </div>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-5 gap-20 mb-16" key={id}>
                            <div className="col-span-2">
                                <Image src={item.imageUrl} height={500} width={500} alt="" className="mx-auto lg:block hidden" />
                            </div>
                            <div className="flex flex-col justify-center col-span-3">
                                <div>
                                    <div className="font-sans font-bold text-4xl text-[#6e6e6e]">0{item.id}</div>
                                    <p className="font-sans text-xl">{item.description}</p>
                                    <p className="font-sans font-semibold text-2xl mt-4 lg:w-[90%]">{item.quotedText}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </div>
    )
}

export default HowItStarted