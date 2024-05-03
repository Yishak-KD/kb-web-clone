import BenefitsCard, { BenefitCardContent } from "@/uicomponents/BenefitsCard"

const BenefitCardData: BenefitCardContent[] = [
    {
        id: 1,
        title: 'Convenience',
        description: 'The Kedus Bible App is a convenient way to access and read the Bible on the go. You can use it anywhere, anytime, even without an internet connection.',
        image: '/images/mobile1.svg'
    },
    {
        id: 2,
        title: 'Customization',
        description: 'The Kedus Bible App allows you to personalize your Bible reading experience by choosing your preferred Bible translation, setting up daily devotional notifications, and highlighting and taking notes on verses.',
        image: '/images/customize.gif'
    },
    {
        id: 3,
        title: 'Impact',
        description: 'The Kedus Bible App allows you to share verses and devotions with your friends and family. Help others find strength and guidance by sharing the verses and devotionals you love.',
        image: '/images/mobile2.svg'
    }
]

const Benefits = () => {
    return (
        <div className="bg-[#F6F6F6] lg:my-20 w-full xl:px-28 lg:px-12 px-8 lg:py-32 py-20 lg:text-center lg:flex lg:space-y-0 space-y-16 gap-6 flex-shrink-0" id="benefits">
            {BenefitCardData.map(item => (
                <div key={item.id} className="flex-1">
                    <BenefitsCard data={[item]} />
                </div>
            ))}
        </div>
    )
}

export default Benefits