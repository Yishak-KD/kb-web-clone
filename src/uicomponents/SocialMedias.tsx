import Image from "next/image"
import Link from "next/link"

export interface SocialMediaItems {
    id: number
    image: string
    width: number
    link: string
}

interface SocialMediaProps {
    data: SocialMediaItems[]
}

const SocialMediaIcons = ({ data }: SocialMediaProps) => {
    return (
        <div className="flex items-center space-x-6">
            {data.map((item, id) => (
                <div key={id}>
                    <Link href={item.link}>
                        <Image src={item.image} height={30} width={item.width} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SocialMediaIcons