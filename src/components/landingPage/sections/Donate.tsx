import Image from "next/image"
import PageHeader from "../PageHeader"
import { useState } from "react"
import TextField from "@mui/material/TextField";
import DonateSubmissionModal from "./DonateSubmissionModal";
import { useForm } from "react-hook-form";

type DonationPaymentMethod = 'chapa' | 'subsplash' | 'paypal'
type DonationFrequency = 'monthly' | 'one time'

export interface DonationPreference {
    amount: string
    paymentMethod: DonationPaymentMethod
    frequency: DonationFrequency
}

const Donate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [donationPreference, setDonationPreference] = useState<DonationPreference | undefined>(undefined)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<DonationPreference>()

    const handleFormSubmit = async (_donationPreference: DonationPreference,) => {
        setModalOpen(true)
        setDonationPreference(_donationPreference)
    };

    return (
        <div className="bg-[#F6F6F6] pb-20" id="donateNow">
            <div className="lg:text-center xl:w-7/12 lg:w-4/5 lg:p-32 p-8 mx-auto lg:mb-0 mb-6">
                <PageHeader bigTitle={'Donate Now'} smallTitle={'SUPPORT OUR WORK'} />
                <p>We are a team passionate about making the Bible accessible to everyone digitally, fostering a deeper connection with the scriptures and enriching spiritual journeys. Your generous donation can make a real difference in achieving this mission. Here's how your contribution can impact</p>
            </div>

            <div className="relative flex lg:flex-row flex-col xl:w-[90%] lg:px-28 px-8 mx-auto gap-6 mb-12">
                <img src="/images/ellipse4.svg" alt="" className="absolute lg:top-[-150px] top-[-200px] lg:left-10 left-0 z-0 opacity-90" />
                <div className="z-10 rounded-xl px-10 py-6 border-2 border-[#FFFFFF]">
                    <h1 className="text-xl font-semibold mb-3">Enhancing the App Experience</h1>
                    <p>Your support allows us to develop new features and functionalities within the app.</p>
                </div>
                <div className="z-10 rounded-xl px-10 py-6 border-2 border-[#FFFFFF]">
                    <h1 className="text-xl font-semibold mb-3 w-[60%]">Spreading the Word in More Languages</h1>
                    <p>Your support helps us to add multiple bible translation to reach wider communities and overcome language barriers.</p>
                </div>
                <div className="z-10 rounded-xl px-10 py-6 border-[#FFFFFF] border-2">
                    <h1 className="text-xl font-semibold mb-3">Ensuring Continuous Growth</h1>
                    <p>Maintaining and updating Kedus Bible requires ongoing resources.</p>
                </div>
            </div>

            <div className="relative grid lg:grid-cols-2 xl:w-[90%] lg:px-28 px-8 mx-auto gap-10">
                <div className="z-10 col-span-1 rounded-xl pb-10 px-10 py-6 border-[#FFFFFF] border-2">
                    <h1 className="text-xl font-semibold mb-3">Reaching a Wider Audience</h1>
                    <p>{`Your contribution empowers us to reach more people through marketing and promotional efforts, spreading awareness about Kedus Bible and its benefits.`}</p>
                </div>
                <img src="/images/ellipse5.svg" alt="" className="absolute top-[-200px] xl:right-[-70px] right-0 z-0 opacity-90" />
                <div className="z-10 col-span-1 rounded-xl px-10 py-6 border-[#FFFFFF] border-2">
                    <h1 className="text-xl font-semibold mb-3">Keeping it Free and Accessible</h1>
                    <p>{`Your support is crucial in keeping the core functionalities of Kedus Bible free for everyone. This ensures financial limitations don't hinder individuals from engaging with the Bible.`}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="relative lg:grid lg:grid-cols-2 xl:w-4/5 mx-auto shadow-lg lg:px-20 px-8 py-20 mt-20">
                    <div className="col-span-1">
                        <img src="/images/ellipse6.svg" alt="" className="absolute top-20 left-[-200px] z-0 opacity-90" />
                        <h1 className="text-xl font-semibold lg:mb-16 mb-10">Choose a donation amount</h1>
                        <div className="flex lg:space-x-44 space-x-28">
                            <div className="z-10 lg:mb-16 mb-8 flex flex-row lg:space-x-6 space-x-4">
                                <input
                                    {...register('amount', { required: "Amount is required" })}
                                    type="radio"
                                    value='10'
                                    className="mb-6"
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <h4 className="font-semibold">$ 10</h4>
                            </div>
                            <div className="relative lg:mb-16 mb-8 flex flex-row lg:space-x-6 space-x-4">
                                <input
                                    {...register('amount')}
                                    type="radio"
                                    value='15'
                                    className="mb-6"
                                    style={{ width: '20px', height: '20px' }} />
                                <h4 className="font-semibold">$ 15</h4>
                            </div>
                        </div>
                        <div className="flex lg:space-x-44 space-x-28">
                            <div className="relative mb-10 flex flex-row lg:space-x-6 space-x-4">
                                <input
                                    {...register('amount')}
                                    type="radio"
                                    value='25'
                                    className="mb-6"
                                    style={{ width: '20px', height: '20px' }} />
                                <h4 className="font-semibold">$ 25</h4>
                            </div>
                            <div className="relative mb-10 flex flex-row lg:space-x-6 space-x-4">
                                <input
                                    {...register('amount')}
                                    type="radio"
                                    value='50'
                                    className="mb-6"
                                    style={{ width: '20px', height: '20px' }} />
                                <h4 className="font-semibold">$ 50</h4>
                            </div>
                        </div>
                        <div className="relative flex flex-row lg:mb-0 mb-10">
                            <p className="font-medium flex my-auto text-3xl">$</p>
                            <TextField fullWidth
                                type="text"
                                placeholder="Write your own amount"
                                defaultValue={watch('amount')}
                                onChange={(e: any) => {
                                    setValue('amount', e.target.value)
                                }}
                                className="pl-4 lg:pr-52"
                            />
                        </div>
                        {errors.amount && <p className="text-red-500 relative">{errors.amount.message}</p>}
                    </div>
                    <div className="col-span-1 relative">
                        <h1 className="text-xl font-semibold mb-16">Desired payment method</h1>
                        <div className="mb-10 flex flex-row space-x-6">
                            <input {...register('paymentMethod', {
                                required: 'Payment method is required',
                            })}
                                type="radio"
                                value={'Chapa'}
                                style={{ width: '20px', height: '20px' }} />
                            <Image src={'/images/chapa.svg'} height={200} width={200} alt="" />
                        </div>
                        <div className="mb-10 flex flex-row space-x-6">
                            <input {...register('paymentMethod')}
                                type="radio"
                                value={'subsplash'}
                                style={{ width: '20px', height: '20px' }}
                            />
                            <Image src={'/images/subsplash.svg'} height={200} width={200} alt="" />
                        </div>
                        <div className="flex flex-row space-x-6 mb-6">
                            <input
                                {...register('paymentMethod')}
                                type="radio"
                                value={'paypal'}
                                style={{ width: '20px', height: '20px' }} />
                            <Image src={'/images/paypal.svg'} height={200} width={200} alt="" />
                        </div>
                        {errors.paymentMethod && <p className="text-red-500">{errors.paymentMethod.message}</p>}
                        <div className="mt-10">
                            <h1 className="text-xl font-semibold mb-6">Choose a donation frequency</h1>
                            <div className="flex space-x-20">
                                <div className="z-10 mb-6 flex flex-row space-x-4">
                                    <input
                                        {...register('frequency', {
                                            required: 'Donation frequency is required',
                                        })}
                                        type="radio"
                                        value={'Monthly'}
                                        className=""
                                        style={{ width: '20px', height: '20px' }} />
                                    <h4>Monthly</h4>
                                </div>
                                <div className="z-10 flex flex-row space-x-4">
                                    <input
                                        {...register('frequency')}
                                        type="radio"
                                        value={'One Time'}
                                        className=""
                                        style={{ width: '20px', height: '20px' }} />
                                    <h4>One Time</h4>
                                </div>
                            </div>
                            {errors.frequency && <p className="text-red-500">{errors.frequency.message}</p>}
                            <button className="z-10 bg-black mt-6 text-white px-14 py-2 lg:text-start justify-center rounded-3xl flex">Donate Now</button>
                            <DonateSubmissionModal open={modalOpen} onClose={() => setModalOpen(false)} donationPreference={donationPreference} />
                        </div>

                        <div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Donate