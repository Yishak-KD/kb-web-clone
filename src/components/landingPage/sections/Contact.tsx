import Image from "next/image"
import PageHeader from "../PageHeader"
import axios from "axios"
import { isSuccessfullStatus } from "../../../../util/ResponseValidation"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { TextField } from "@mui/material"

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const handleFormSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        try {
            const response = await axios.post('/api/contactUs', data)
            if (isSuccessfullStatus(response) && response.data.success) {
                reset();
            } else {
                console.warn('An error occurred while submitting the form.')
            }
        } catch (error) {
            console.error('An error occurred:', error)
        }
    }

    return (
        <div className="w-full relative lg:my-0 my-20" id="contactUs">
            <img src="/images/ellipse7.svg" alt="" className="absolute top-[-100px] right-0 z-0 opacity-90" />
            <div className="relative lg:text-center lg:w-7/12 w-full lg:p-32 p-8 mx-auto">
                <PageHeader bigTitle={'Feel Free To Contact Us!'} smallTitle={'LOREM IPSUM'} />
                <p>Lorem ipsum dolor sit amet consectetur. Mus amet tristique vestibulum nisi sit. Donec sit nibh risus aliquet accumsan egestas egestas.</p>
            </div>

            <div className="relative lg:grid lg:grid-cols-2 lg:w-4/5 w-full mx-auto flex flex-col gap-20">
                <div className="flex flex-col items-start lg:pl-20 pl-8 col-span-1">
                    <h1 className="text-2xl font-semibold mb-6">General Inquiries</h1>
                    <p className="lg:max-w-[80%] mb-6">Lorem ipsum dolor sit amet consectetur. Sed volutpat facilisis facilisis sodales convallis in.</p>
                    <p className="underline font-bold text-base mb-6">info@kedusbible.com</p>
                    <div className="xl:lg:block hidden">
                        {/* Section 4 */}
                        <div className="flex flex-row space-x-5 mb-10">
                            <h1 className="font-semibold text-lg">Follow us</h1>
                            <Image src={'/images/twitter.svg'} height={30} width={25} alt="" />
                            <Image src={'/images/facebook.svg'} height={30} width={10} alt="" />
                            <Image src={'/images/instagram.svg'} height={30} width={20} alt="" />
                            <Image src={'/images/telegram.svg'} height={30} width={25} alt="" />
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
                                required: 'Ful Name is required',
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
                        <button type="submit" className="bg-black text-white px-10 py-2 lg:w-[35%] w-full lg:text-start justify-center rounded-3xl flex">Send Message</button>
                    </form>
                </div>
                <div className="lg:xl:hidden block">
                    {/* Section 4 */}
                    <div className="flex flex-row space-x-5 px-8 mb-10">
                        <h1 className="font-semibold text-lg">Follow us</h1>
                        <Image src={'/images/twitter.svg'} height={30} width={25} alt="" />
                        <Image src={'/images/facebook.svg'} height={30} width={10} alt="" />
                        <Image src={'/images/instagram.svg'} height={30} width={20} alt="" />
                        <Image src={'/images/telegram.svg'} height={30} width={25} alt="" />
                    </div>
                    {/* Section 5 */}
                    <div className="flex mx-auto lg:gap-10">
                        <Image src={'/images/playstoreqr.svg'} height={100} width={100} alt="" className="mx-auto lg:h-full h-2/4 lg:w-full w-[35%]" />
                        <Image src={'/images/appleqr.svg'} height={100} width={100} alt="" className="mx-auto lg:h-full h-2/4 lg:w-full w-[35%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact