import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { EMAIL_REGEX } from "../../../../constants/constants";
import axios from "axios";
import { isSuccessfullStatus } from "../../../../util/ResponseValidation";

const Footer = () => {
    const [countryCode, setCountryCode] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState(false);

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
        { href: "/", name: "FEATURES" },
        { href: "/", name: "BENEFITS" },
        { href: "/", name: "DONATE NOW" },
        { href: "/", name: "CONTACT US" },
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

                if (isSuccessfullStatus(res)) {
                    setEmail("");
                    setIsSubscribed(false);
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
            <div className=" mt-48 lg:px-32 sm:px-20 px-8 py-12 grid lg:grid-cols-4 md:grid-cols-2 lg:gap-2 gap-10">
                <div>
                    <div className="flex flex-row items-center space-x-4">
                        <Image
                            src={'/images/kb_logo.svg'}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <h1 className="text-2xl font-medium text-[#9FC9EC] w-1/3">Kedus Bible</h1>
                    </div>
                    <p className="text-slate-700 text-base mt-4 lg:max-w-[60%]">
                        Lorem ipsum dolor sit amet consectetur. Sed volutpat facilisis facilisis sodales convallis in.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-bold mb-3 text-[#9FC9EC]">Quick Links</h3>
                    {quickLinks.map((item) => (
                        <Link
                            key={item.name}
                            className="text-base pl-1 mt-3 text-[#9FC9EC]"
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <h3 className="text-base font-bold mb-4 text-[#9FC9EC]">Get In Touch</h3>
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
                <div>
                    <h3 className="text-base font-bold mb-6 text-[#9FC9EC]">
                        Subscribe to our news letter
                    </h3>

                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                setError(!inputValue);
                                setEmail(inputValue);
                            }}
                            className={`bg-[#E3E3E390] outline-none text-lg text-slate-700 py-2 px-4 flex-grow ${error && "border-red-500"
                                }`}
                            style={{ height: "50px", borderRadius: "5px" }}
                        />
                        <button
                            style={{
                                height: "50px",
                                width: "auto",
                                minWidth: "50px",
                                borderRadius: "5px",
                                // backgroundColor: "#2B70FA",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                                flexGrow: 0,
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
                    </div>
                </div>
            </div>
            <div className="text-[#9FC9EC] text-center text-sm pb-8">
                Copyright © 2023 Kidus Bible - All rights reserved
            </div>
        </div>

    );
};

export default Footer;