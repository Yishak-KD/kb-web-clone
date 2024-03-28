import SocialMedias, { SocialMediaItems } from "@/uicomponents/SocialMedias"
import Image from "next/image"

interface CardItems {
    id: number
    title: string
    detailTitle?: string
    backgroundImage: string
    detailIcon: string
    image?: string
    footerItem?: string
    redirect: string
}

interface CardItemProps {
    items: CardItems[]
}

const SocialMediasData: SocialMediaItems[] = [
    {
        id: 1,
        image: '/images/facebook3.svg',
        width: 15,
        link: 'https://facebook.com/kedusbible'
    },
    {
        id: 2,
        image: '/images/instagram3.svg',
        width: 20,
        link: 'https://www.instagram.com/kedus_bible'
    },
    {
        id: 3,
        image: '/images/telegram3.svg',
        width: 25,
        link: 'https://facebook.com/kedusbible'
    },
]

const CardSection = ({ items }: CardItemProps) => {
    return (
        <div className="w-full xl:lg:px-28 px-8 lg:mt-32 mt-14">
            <div className="lg:flex lg:flex-row space-y-10 flex-col xl:space-x-10 lg:space-x-2 lg:h-80 items-end">
                {items.map((item, id) => (
                    <div className="lg:relative flex flex-col xl:w-[18%] w-full" key={id}>
                        <div className={`lg:absolute ${item.id === 3 ? 'lg:-top-64 rounded-3xl' : 'lg:-top-80 rounded-3xl'}`} style={{ backgroundImage: `url(${item.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className={`relative flex flex-col items-center justify-center ${item.id === 3 ? 'h-64' : 'h-80'}`}>
                                <h1 className={`font-bold text-center ${item.id === 2 || item.id === 4 ? 'lg:mt-[-180px] ' : 'mt-0'} mx-auto xl:text-4xl lg:text-2xl text-4xl xl:lg:px-0 px-4`}>{item.title}</h1>
                                {item.image && <img src={item.image} alt="" height={110} width={110} className="lg:absolute lg:mt-10" />}
                                <div className={`cursor-pointer absolute flex lg:flex-row items-center border-[#fff] py-2 px-2 rounded-full ${item.id === 4 ? 'bg-transparent' : 'bg-[#D7E5EC]'} w-[90%] justify-between bottom-2`}
                                    onClick={() => window.location.replace(item.redirect)}>
                                    <h4 className="text-center flex-grow">{item.detailTitle}</h4>
                                    <img src={item.detailIcon} alt="" height={40} width={40} />
                                </div>
                            </div>
                        </div>
                        {/* Section 2 */}
                        {(item.id === 1 || item.id === 5) && (
                            <div className="lg:block mt-4 w-[100%]">
                                <div className={`flex space-x-6 justify-center h-28 rounded-[30px] ${item.id === 1 ? 'bg-black' : 'bg-[#A2CAEB]'}`}>
                                    {item.footerItem && <SocialMedias data={SocialMediasData} />}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )

}

export default CardSection