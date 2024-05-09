import Image from "next/image"
import PageHeader from "../PageHeader"

interface ProfileData {
    id: number
    imageUrl: string
    bigTitle?: string
    smallTitle?: string
    description: string
}

const ProfileDataList: ProfileData[] = [{
    id: 1,
    imageUrl: '/images/makeBibleyourown.svg',
    bigTitle: 'How It Started',
    smallTitle: 'KEDUS BIBLE',
    description: 'Kedus Bible has its roots in the cherished childhood memories of its founder. Growing up, he experienced the profound impact of nightly family prayer sessions - a tradition passed down from his grandparents and lovingly upheld by his mother. Every evening, his family of seven would gather, each member sharing a Bible verse and uniting in prayer. These moments shaped his spiritual journey and left a lasting impression.'
},
{
    id: 2,
    imageUrl: '/images/makeBibleyourown.svg',
    description: 'Years later, as a college student studying Computer Science, he created the first version of Kedus Bible from a passion for daily devotional practices and a shared love of the Bible. Our mission remains steadfast: to make the Bible accessible to all, empowering individuals and families to embark on their personal journeys of faith.'
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
                            <div className="col-span-2 flex items-center justify-center">
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