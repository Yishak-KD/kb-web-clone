import Image from "next/image"
import Link from "next/link"
import ReactGA from "react-ga4";

export interface SocialMediaItems {
    id: number
    image: string
    name?: string
    width: number
    link: string
}

interface SocialMediaProps {
    data: SocialMediaItems[]
}

const SocialMediaIcons = ({ data }: SocialMediaProps) => {
    const handleClick = (item: SocialMediaItems) => {
        const action = `User clicked ${item.name} icon`;
        ReactGA.event({
            category: 'Social Media Link Click',
            action: action,
        });
    };
    return (
        <div className="flex items-center space-x-6">
            {data.map((item, id) => (
                <div key={id} onClick={() => handleClick(item)}>
                    <Link href={item.link}>
                        <Image src={item.image} height={30} width={item.width} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SocialMediaIcons