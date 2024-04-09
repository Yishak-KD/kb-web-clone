import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { EMAIL_REGEX } from "../../../../constants/constants";
import axios from "axios";
import { isSuccessfullStatus } from "../../../../util/ResponseValidation";
import Snackbar from "@/uicomponents/SnackBar";
import ReactGA from "react-ga4";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
};

const Footer = () => {
    const [countryCode, setCountryCode] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState(false);
    const [showNotification, setShowNotification] = useState<boolean>(false)

    const InTouchComponent = ({
        image,
        text,
    }: {
        image: string;
        text: string;
    }) => {
        return (
            <p className="text-base text-slate-700 pl-1 mt-3 flex flex-row gap-4">
                <Image src={image} height={20} width={20} alt="" />
                {text}
            </p>
        );
    };

    const quickLinks = [
        { href: "/", name: "HOME" },
        { href: "/#features", name: "FEATURES" },
        { href: "/#benefits", name: "BENEFITS" },
        { href: "/#donateNow", name: "DONATE NOW" },
        { href: "/#contactUs", name: "CONTACT US" },
    ];

    useEffect(() => {
        setError(false);
        setTimeout(() => {
            setIsSubscribed(false);
        }, 3000);
    }, [isSubscribed]);

    useEffect(() => {
        async function getCountryCode() {
            await axios
                .get(
                    `https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_REGISTRY_API_KEY}`,
                )
                .then((data) => {
                    setCountryCode(data.data.location?.country?.code);
                });
        }
        getCountryCode();
    }, []);

    const handleEmailSubscription = async () => {
        if (EMAIL_REGEX.test(email)) {
            try {
                const res = await axios.post("/api/subscriber", {
                    email: email,
                });
                ReactGA.event({
                    label: "button_click",
                    category: "user_interaction",
                    action: "user_subscribed",
                });

                if (isSuccessfullStatus(res)) {
                    setEmail("");
                    setIsSubscribed(false);
                    setShowNotification(true)
                    setError(false);
                }
            } catch (error) {
                setError(true);
                console.error("Error occurred while subscribing:", error);
            }
        } else {
            setError(true);
        }
    };

    return (
        <div className="bg-[#F6F6F6]">
            <div className="lg:mt-48 mt-32 xl:px-32 lg:px-10 px-8 py-12 grid lg:grid-cols-4 md:grid-cols-2 lg:gap-2 gap-10">
                <div>
                    <div className="flex flex-row items-center space-x-4">
                        <Image
                            src={'/images/kb_logo.svg'}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <h1 className="text-2xl font-medium w-1/3">Kedus Bible</h1>
                    </div>
                    <p className="text-slate-700 text-base mt-4 lg:max-w-[60%]">
                        Ensuring the transformative power of the scripture is within reach for all.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-bold mb-2">Quick Links</h3>
                    {quickLinks.map((item) => (
                        <Link
                            key={item.name}
                            className="text-sm pl-1 mt-3 w-fit"
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <h3 className="text-base font-bold mb-4">Get In Touch</h3>
                    <InTouchComponent
                        image="/images/post.svg"
                        text="support@aevue.com"
                    />
                    <InTouchComponent
                        image="/images/call.svg"
                        text={
                            countryCode === "ET"
                                ? "+251 904 202 639"
                                : "+1 571-290-1534"
                        }
                    />
                    <InTouchComponent
                        image="/images/direction.svg"
                        text={
                            countryCode === "ET"
                                ? "Afework Bldg. 4th Floor Next to Bambis Supermarket"
                                : "10000 Washington Blvd, Culver City, CA 90232"
                        }
                    />
                </div>
                <div className="w-full flex flex-col">
                    <h3 className="text-base font-bold mb-6">
                        Subscribe to our news letter
                    </h3>

                    <div className="flex flex-row w-full items-center">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                setError(!inputValue);
                                setEmail(inputValue);
                            }}
                            className={`bg-[#E3E3E390] outline-none text-lg text-slate-700 py-2 px-4  ${error && "border-red-500"
                                }`}
                            style={{ height: "50px", borderRadius: "5px", width: 'calc(100% - 50px)' }}
                        />
                        <button
                            style={{
                                height: "50px",
                                minWidth: "50px",
                                borderRadius: "5px",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={handleEmailSubscription}
                        >
                            <Image
                                src={"/images/send-btn.svg"}
                                height={50}
                                width={50}
                                alt="Send"
                                className="w-full"
                            />
                        </button>
                        <Snackbar 
                            open={showNotification} 
                            text="Successfully subscribed"
                            onClose={() => setShowNotification(false)}
                            type="success"/>
                    </div>
                </div>
            </div>
            <div className="flex text-center text-sm justify-center mb-6">
                <Link href={'/termsofuse'}>
                    <p onClick={scrollToTop}>Terms of Use</p>
                </Link>
                <span className="mx-2">|</span>
                <Link href={'/privacy'}>
                    <p onClick={scrollToTop}>Privacy Policy</p>
                </Link>
            </div>
            <div className="text-center text-sm pb-8">
                Copyright © 2023 Kidus Bible - All rights reserved
            </div>
        </div>

    );
};

export default Footer;