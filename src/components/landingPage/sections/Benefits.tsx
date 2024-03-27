import Image from "next/image"
import PageHeader from "../PageHeader"
import BenefitsCard, { BenefitCardContent } from "@/uicomponents/BenefitsCard"

const BenefitCardData: BenefitCardContent[] = [
    {
        id: 1,
        title: 'Community',
        description: 'The Kedus Bible App allows you to share verses and devotionals with your friends and family. Connect with others to grow in your knowledge and understanding.',
        image: '/images/mobile1.svg'
    },
    {
        id: 2,
        title: 'Personalization',
        description: 'The Kedus Bible App allows you to personalize your Bible reading experience by choosing your preferred Bible translation, setting up daily devotional notifications, and highlighting and taking notes on verses.',
        image: '/images/benefiticon.svg'
    },
    {
        id: 3,
        title: 'Convenience',
        description: 'The Kedus Bible App is a convenient way to access and read the Bible on the go. You can use it anywhere, anytime, even without an internet connection.',
        image: '/images/mobile2.svg'
    }
]

const Benefits = () => {
    return (
        <div className="bg-[#F6F6F6] lg:my-20 w-full lg:px-28 px-8 lg:py-32 py-20 lg:text-center lg:flex lg:space-y-0 space-y-16 gap-6 flex-shrink-0" id="benefits">
            {BenefitCardData.map(item => (
                <div key={item.id} className="flex-1">
                    <BenefitsCard data={[item]} />
                </div>
            ))}
        </div>
    )
}

export default Benefits