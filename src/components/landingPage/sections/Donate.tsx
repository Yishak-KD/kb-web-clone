import Image from "next/image"
import PageHeader from "../PageHeader"
import { useState } from "react"
import axios from "axios"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../../../constants/constants";

const Donate = () => {
    const [donationAmount, setDonationAmount] = useState<string>("$10")
    const [paymentMethod, setPaymentMethod] = useState<string>("chapa")
    const [donationFrequency, setDonationFrequency] = useState<string>("Monthly")
    const [modalOpen, setModalOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const handleModalOpen = () => {
        if (donationAmount && paymentMethod && donationFrequency) {
            setModalOpen(true);
        } else {
            console.warn("All fields are required");
        }
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleFullNameChange = (event: any) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handleAmountChange = (event: any) => {
        setDonationAmount(event.target.value);
    };

    const handlePaymentChange = (event: any) => {
        setPaymentMethod(event.target.value);
    };

    const handleFrequencyChange = (event: any) => {
        setDonationFrequency(event.target.value);
    };

    const handleFormSubmit = async () => {
        if (donationAmount && paymentMethod && donationFrequency) {
            try {
                setLoading(true)
                const response = await axios.post("/api/donations", {
                    donationAmount,
                    paymentMethod,
                    donationFrequency,
                    fullName,
                    email
                });

                if (response.status === 200) {
                    setModalOpen(false)
                    setFullName("")
                    setEmail("")
                    reset()
                    window.open("https://www.paypal.com/paypalme/KedusBible?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=1d173892-5dae-11ee-a598-3cecef6b0210&ppid=RT000269&cnac=US&rsta=en_US%28en-US%29&cust=ZFGLH5CNR7VSG&unptid=1d173892-5dae-11ee-a598-3cecef6b0210&calc=f4767401b9a86&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.205.0&xt=104038%2C124817", "_blank");
                } else {
                    console.error("Error submitting data");
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.data?.error) {
                    console.warn(error.response.data.error);
                } else {
                    console.error(error);
                    console.warn("An error occured while submitting the form");
                }
            }
        } else {
            console.warn("All fields are required");
        }
        setLoading(false)
    };


    return (
        <div className="bg-[#F6F6F6]" id="donateNow">
            <div className="lg:text-center lg:w-7/12 lg:p-32 p-8 mx-auto lg:mb-0 mb-6">
                <PageHeader bigTitle={'Donate Now'} smallTitle={'LOREM IPSUM'} />
                <p>{`We are a team passionate about making the Bible accessible to everyone digitally, fostering a deeper connection with the scriptures and enriching spiritual journeys. Your generous donation can make a real difference in achieving this mission. Here's how your contribution can impact`}</p>
            </div>

            <div className="relative flex lg:flex-row flex-col lg:w-[90%] lg:px-28 px-8 mx-auto gap-6 mb-12">
                <img src="/images/ellipse4.svg" alt="" className="absolute lg:top-[-150px] top-[-200px] lg:left-10 left-0 z-0 opacity-90" />
                <div className="z-10 rounded-md px-10 py-6 border-[#FFFFFF] bg-[#F6F6F6] shadow-md">
                    <h1 className="text-xl font-semibold mb-3">Enhancing the App Experience</h1>
                    <p>Your support allows us to develop new features and functionalities within the app.</p>
                </div>
                <div className="z-10 rounded-md px-10 py-6 border-[#FFFFFF] bg-[#F6F6F6] shadow-md">
                    <h1 className="text-xl font-semibold mb-3 w-[60%]">Spreading the Word in More Languages</h1>
                    <p>Your support helps us to add multiple bible translation to reach wider communities and overcome language barriers.</p>
                </div>
                <div className="z-10 rounded-md px-10 py-6 border-[#FFFFFF] bg-[#F6F6F6] shadow-md">
                    <h1 className="text-xl font-semibold mb-3">Ensuring Continuous Growth</h1>
                    <p>Maintaining and updating Kedus Bible requires ongoing resources.</p>
                </div>
            </div>

            <div className="relative grid lg:grid-cols-2 lg:w-[90%] lg:px-28 px-8 mx-auto gap-10">
                <div className="z-10 col-span-1 rounded-md pb-10 px-10 py-6 border-[#FFFFFF] shadow-md bg-[#F6F6F6]">
                    <h1 className="text-xl font-semibold mb-3">Reaching a Wider Audience</h1>
                    <p>{`Your contribution empowers us to reach more people through marketing and promotional efforts, spreading awareness about Kedus Bible and its benefits.`}</p>
                </div>
                <img src="/images/ellipse5.svg" alt="" className="absolute top-[-200px] lg:right-[-70px] right-0 z-0 opacity-90" />
                <div className="z-10 col-span-1 rounded-md px-10 py-6 border-[#FFFFFF] shadow-md bg-[#F6F6F6]">
                    <h1 className="text-xl font-semibold mb-3">Keeping it Free and Accessible</h1>
                    <p>{`Your support is crucial in keeping the core functionalities of Kedus Bible free for everyone. This ensures financial limitations don't hinder individuals from engaging with the Bible.`}</p>
                </div>
            </div>

            <div className="relative lg:grid lg:grid-cols-2  lg:w-4/5 mx-auto shadow-lg lg:px-20 px-8 py-20 mt-20">
                <div className="col-span-1">
                    <img src="/images/ellipse6.svg" alt="" className="absolute top-20 left-[-200px] z-0 opacity-90" />
                    <h1 className="text-xl font-semibold lg:mb-16 mb-10">Choose a donation amount</h1>
                    <div className="flex lg:space-x-44 space-x-28">
                        <div className="z-10 lg:mb-16 mb-8 flex flex-row lg:space-x-6 space-x-4 items-center justify-start">
                            <input type="radio" name="donationAmount" value="$10" onChange={handleAmountChange} style={{ width: '20px', height: '20px' }} />
                            <h4 className="font-semibold">$ 10</h4>
                        </div>
                        <div className="relative lg:mb-16 mb-8 flex flex-row lg:space-x-6 space-x-4 items-center justify-start">
                            <input type="radio" name="donationAmount" value="$15" onChange={handleAmountChange} style={{ width: '20px', height: '20px' }} />
                            <h4 className="font-semibold">$ 15</h4>
                        </div>
                    </div>
                    <div className="flex lg:space-x-44 space-x-28">
                        <div className="relative mb-10 flex flex-row lg:space-x-6 space-x-4 items-center justify-start">
                            <input type="radio" name="donationAmount" value="$25" onChange={handleAmountChange} style={{ width: '20px', height: '20px' }} />
                            <h4 className="font-semibold">$ 25</h4>
                        </div>
                        <div className="relative mb-10 flex flex-row lg:space-x-6 space-x-4 items-center justify-start">
                            <input type="radio" name="donationAmount" value="$50" onChange={handleAmountChange} style={{ width: '20px', height: '20px' }} />
                            <h4 className="font-semibold">$ 50</h4>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 relative">
                    <h1 className="text-xl font-semibold mb-16">Desired payment method</h1>
                    <div className="mb-10 flex flex-row space-x-6 items-center justify-start">
                        <input type="radio" name="paymentMethod" value="chapa" onChange={handlePaymentChange} style={{ width: '20px', height: '20px' }} />
                        <Image src={'/images/chapa.svg'} height={150} width={150} alt="" />
                    </div>
                    <div className="mb-10 flex flex-row space-x-6 items-center justify-start">
                        <input type="radio" name="paymentMethod" value="subsplash" onChange={handlePaymentChange} style={{ width: '20px', height: '20px' }} />
                        <Image src={'/images/subsplash.svg'} height={150} width={150} alt="" />
                    </div>
                    <div className="flex flex-row space-x-6 items-center justify-start mb-16">
                        <input type="radio" name="paymentMethod" value="paypal" onChange={handlePaymentChange} style={{ width: '20px', height: '20px' }} />
                        <Image src={'/images/paypal.svg'} height={150} width={150} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mb-8">Choose a donation frequency</h1>
                        <div className="flex space-x-20">
                            <div className="z-10 mb-16 flex flex-row space-x-4 items-center justify-start">
                                <input type="radio" name="donationFrequency" value="Monthly" onChange={handleFrequencyChange} style={{ width: '20px', height: '20px' }} />
                                <h4>Monthly</h4>
                            </div>
                            <div className="z-10 mb-16 flex flex-row space-x-4 items-center justify-start">
                                <input type="radio" name="donationFrequency" value="One Time" onChange={handleFrequencyChange} style={{ width: '20px', height: '20px' }} />
                                <h4>One Time</h4>
                            </div>
                        </div>
                        <button className="z-10 mt-[-18px] bg-black text-white px-14 py-2 lg:text-start justify-center rounded-3xl flex" onClick={handleModalOpen}>Donate Now</button>

                        {/* Modal */}
                        <Modal open={modalOpen} onClose={handleModalClose}>
                            <Box sx={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, padding: '65px 30px', width: 600, outline: 'none',
                                '@media screen and (max-width: 760px)': {
                                    padding: '100px 20px',
                                    width: '100vw',
                                    height: '100vh'
                                }
                            }}>
                                <div className="relative top-[-25px] flex float-end hover:cursor-pointer w-fit" style={{ marginTop: '-20px' }} onClick={handleModalClose}>
                                    <Close />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-xl mb-4">Express Your Generosity</h2>
                                    <p className="text-base mb-4">Share your name and email to join our mission of making a difference. Together, we can create positive change. Thank you for your support.</p>
                                </div>
                                <form onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div>
                                        <p className="font-semibold mb-3">Name</p>
                                        <TextField fullWidth {...register('fullName', {
                                            required: 'Full Name is required',
                                        })}
                                            placeholder="Full Name"
                                            type="text"
                                            variant="outlined"
                                            error={!!errors.fullName}
                                            helperText={
                                                errors.fullName &&
                                                (errors.fullName.message as string)
                                            }
                                            className="mb-6 border border-slate-300" 
                                            onChange={handleFullNameChange}/>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-3">Address</p>
                                        <TextField
                                            fullWidth
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: EMAIL_REGEX,
                                                    message: 'Please enter a valid email address'
                                                }
                                            })}
                                            type="text"
                                            placeholder="Email"
                                            variant="outlined"
                                            error={!!errors.email}
                                            helperText={
                                                errors.email &&
                                                (errors.email.message as string)
                                            }

                                            className="border border-slate-300 mb-8" 
                                            onChange={handleEmailChange}/>
                                    </div>
                                    <button type='submit' className="bg-black hover:bg-black text-white px-10 py-2 rounded-3xl top-10" style={{ float: "right" }} disabled={loading}>
                                        {loading ? (
                                            <div className="flex items-center">
                                                <span className="mr-2">Submit</span>
                                                <CircularProgress
                                                    style={{ color: 'white' }}
                                                    size={20}
                                                />
                                            </div>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </form>
                            </Box>
                        </Modal>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate