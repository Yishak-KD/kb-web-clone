import Image from "next/image"
import Link from "next/link"

export interface SocialMediaItems {
    id: number
    image: string
    width: number
}

interface SocialMediaProps {
    data: SocialMediaItems[]
}

const SocialMedias = ({ data }: SocialMediaProps) => {
    return (
        <div className="flex items-center space-x-5">
            {data.map((item, id) => (
                <div key={id}>
                    <Link href={''}>
                        <Image src={item.image} height={30} width={item.width} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SocialMedias