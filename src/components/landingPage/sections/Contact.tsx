import Image from "next/image"
import PageHeader from "../PageHeader"
import axios from "axios"
import { isSuccessfullStatus } from "../../../../util/ResponseValidation"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { CircularProgress, TextField } from "@mui/material"
import Snackbar from "@/uicomponents/SnackBar"
import { useState } from "react"
import { EMAIL_REGEX } from "../../../../constants/constants"
import SocialMedias, { SocialMediaItems } from "@/uicomponents/SocialMedias"

const SocialMediasData: SocialMediaItems[] = [
    {
        id: 1,
        image: '/images/twitter.svg',
        width: 25
    },
    {
        id: 2,
        image: '/images/facebook.svg',
        width: 10
    },
    {
        id: 3,
        image: '/images/instagram.svg',
        width: 20
    },
    {
        id: 4,
        image: '/images/telegram.svg',
        width: 25
    },
]

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleFormSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        try {
            setLoading(true)
            const response = await axios.post('/api/contactUs', data)
            if (isSuccessfullStatus(response) && response.data.success) {
                setShowNotification(true)
                reset();
            } else {
                console.warn('An error occurred while submitting the form.')
            }
        } catch (error) {
            console.error('An error occurred:', error)
        }
        setLoading(false)
    }

    return (
        <div className="w-full relative lg:my-0 my-20" id="contactUs">
            <img src="/images/ellipse7.svg" alt="" className="absolute top-[-80px] right-0 z-0 opacity-90" />
            <div className="relative lg:text-center xl:w-7/12 lg:w-4/5 w-full lg:p-32 p-8 mx-auto">
                <PageHeader bigTitle={'Connect with Kedus Bible'} smallTitle={'CONTACT US'} />
                <p>{`We'd love to hear from you! Whether you have a question, a comment, or a suggestion for improvement, we're here to listen.`}</p>
            </div>

            <div className="relative lg:grid lg:grid-cols-2 xl:w-4/5 w-full mx-auto flex flex-col xl:gap-20 lg:gap-10">
                <div className="flex flex-col items-start lg:pl-20 pl-8 col-span-1">
                    <h1 className="text-2xl font-semibold mb-6">General Inquiries</h1>
                    <p className="lg:max-w-[80%] max-w-[90%] mb-6">Feel free to contact us using one of the methods below:</p>
                    <p className="underline font-bold text-base mb-6">info@kedusbible.com</p>
                    <div className="xl:lg:block hidden">
                        {/* Section 4 */}
                        <div className="flex flex-row space-x-5 mb-10">
                            <h1 className="font-semibold text-lg">Follow us</h1>
                            <SocialMedias data={SocialMediasData} />
                        </div>
                        {/* Section 5 */}
                        <div className="flex mx-auto lg:gap-10">
                            <Image src={'/images/playstoreqr.svg'} height={100} width={100} alt="" className="mx-auto lg:h-full h-2/4 lg:w-full w-[35%]" />
                            <Image src={'/images/appleqr.svg'} height={100} width={100} alt="" className="mx-auto lg:h-full h-2/4 lg:w-full w-[35%]" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:px-0 px-8">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <TextField
                            {...register('fullName', {
                                required: 'Full Name is required',
                            })}
                            type="text"
                            placeholder="Full Name"
                            variant="outlined"
                            error={!!errors.fullName}
                            helperText={
                                errors.fullName &&
                                (errors.fullName.message as string)
                            }
                            className="py-3 mb-4 text-black outline-none lg:w-[90%] w-full" />
                        <TextField
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: 'Email should be valid'
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
                            className="py-3 mb-4 text-black outline-none lg:w-[90%] w-full" />
                        <TextField
                            multiline
                            rows={8}
                            {...register('message', {
                                required: 'Message is required',
                            })}
                            placeholder="Enter your message here"
                            variant="outlined"
                            fullWidth
                            className="lg:w-[90%] w-full"
                            error={!!errors.message}
                            helperText={
                                errors.message && (errors.message.message as string)
                            }
                            sx={{
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}
                            inputProps={{
                                style: {
                                    fontSize: '16px',
                                    outline: 'none'
                                },
                            }}
                        />
                        <button type="submit" className="bg-black text-white lg:px-10 px-20 py-2 lg:text-start lg:w-[90%] w-full justify-center rounded-3xl flex">
                            {loading ? (
                                <>
                                    <span className="mr-2">Send Message</span>
                                    <CircularProgress
                                        style={{ color: 'white' }}
                                        size={24}
                                    />
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                    <Snackbar
                        open={showNotification}
                        text="Successfully Sent"
                        onClose={() => setShowNotification(false)}
                        type="success"
                    />
                </div>
                <div className="lg:xl:hidden block px-20">
                    {/* Section 4 */}
                    <div className="flex flex-row space-x-5 lg:px-8 px-0 my-10">
                        <h1 className="font-semibold text-lg">Follow us</h1>
                        <SocialMedias data={SocialMediasData} />
                    </div>
                    {/* Section 5 */}
                    <div className="flex gap-5">
                        <Image src={'/images/playstoreqr.svg'} height={100} width={100} alt="" className="h-full w-[60%]" />
                        <Image src={'/images/appleqr.svg'} height={100} width={100} alt="" className="h-full w-[60%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact