import Image from "next/image"

export interface BenefitCardContent {
    id: number
    title: string
    description: string
    image: string
}

interface BenefitCardProps {
    data: BenefitCardContent[]
}

const BenefitsCard = ({ data }: BenefitCardProps) => {
    return (
        <div className="">
            {data.map((item, id) => {
                return (
                    <div className="bg-[#FFFFFF] flex flex-col items-center pt-10 rounded-2xl" key={id} style={{flex: 1, height: '600px'}}>
                        <h1 className="font-semibold text-xl mb-8">{item.title}</h1>
                        {item.id === 2 ? (
                            <div className="flex flex-col items-center">
                                <Image src={item.image} height={350} width={350} alt="" className="mb-12"/>
                                <p className="px-10 font-medium leading-6 text-center">{item.description}</p>
                            </div>
                        ) : (
                            <>
                                <p className="px-10 font-medium leading-6 text-center">{item.description}</p>
                                <Image src={item.image} height={380} width={380} alt="" />
                            </>
                        )
                        }
                    </div>
                )
            })}

        </div>
    )
}

export default BenefitsCard