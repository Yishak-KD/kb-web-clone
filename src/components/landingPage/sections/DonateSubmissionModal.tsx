import { Close } from "@mui/icons-material"
import { Box, Button, CircularProgress, Modal, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { DonationPreference } from "./Donate"
import axios from "axios"
import { EMAIL_REGEX, PHONE_REGEX } from "../../../../constants/constants"
import { useState } from "react"
import ReactGA from "react-ga4";

interface DonateSubmissionModalProps {
    open: boolean
    onClose: () => void
    resetForm: () => void
    donationPreference: DonationPreference | undefined
}

interface DonationUserInfo {
    fullName: string
    email: string
    phoneNumber: string
}

const DonateSubmissionModal = ({ open, onClose, donationPreference, resetForm }: DonateSubmissionModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DonationUserInfo>()
    const [loading, setLoading] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const text = '013201012585400';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    };

    const handleFormSubmit = async (values: DonationUserInfo) => {
        try {
            setLoading(true)
            if (!donationPreference) {
                return
            }
            const response = await axios.post("/api/donations",
                {
                    fullName: values.fullName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    amount: donationPreference.amount,
                    paymentMethod: donationPreference.paymentMethod,
                    frequency: donationPreference.frequency,
                }
            );

            if (response.status === 200) {
                if (donationPreference.paymentMethod === 'paypal') {
                    setTimeout(() => {
                        window.open("https://www.paypal.com/paypalme/KedusBible", "_blank");
                    })
                }
                reset()
                resetForm()
                setIsSubmitted(true)

                ReactGA.event({
                    category: 'Donation Form',
                    action: 'donation_personal_information_submitted'
                });
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
        setLoading(false)
    };

    const resetModal = () => {
        setIsSubmitted(false)
        onClose()
    }

    return (
        <Modal open={open} onClose={resetModal}>
            <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, padding: '65px 30px', width: 650, outline: 'none',
                '@media screen and (max-width: 760px)': {
                    padding: '60px 20px',
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0,
                    overflowY: 'auto'
                }
            }}>
                <div className="relative lg:top-[-25px] md:top-[-20px] top-[-50px] flex float-end hover:cursor-pointer w-fit md:mt-0 mt-8" onClick={resetModal}>
                    <Close />
                </div>
                {!isSubmitted ?
                    (<div>
                        <div className="mt-6">
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
                                />
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
                                    className="border border-slate-300 mb-8" />
                            </div>
                            <div>
                                <p className="font-semibold mb-3">Phone Number</p>
                                <TextField
                                    fullWidth
                                    {...register('phoneNumber', {
                                        pattern: {
                                            value: PHONE_REGEX,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                    type="number"
                                    placeholder="Phone Number"
                                    variant="outlined"
                                    error={!!errors.email}
                                    helperText={
                                        errors.phoneNumber &&
                                        (errors.phoneNumber.message as string)
                                    }
                                    className="border border-slate-300 mb-4" />
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
                    </div>) : (
                        <div>
                            {(donationPreference?.paymentMethod == 'awash') ?
                                <div className="mb-8">
                                    <h1 className="text-base font-semibold mb-6">Donate to our Awash Bank account and empower communities.
                                    </h1>
                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <input
                                            type="text"
                                            defaultValue={text}
                                            readOnly
                                            className="flex-grow px-4 py-2 bg-gray-100 text-gray-800 border-none focus:outline-none"
                                        />
                                        <Button
                                            onClick={copyToClipboard}
                                            className="px-4 py-2 bg-black text-white hover:bg-black font-semibold focus:outline-none"
                                        >
                                            {!copied ? 'Copy' : 'Copied'}
                                        </Button>
                                    </div>
                                </div> : <div>Thank You for your generosity.</div>
                            }
                            <button onClick={resetModal} className="bg-black hover:bg-black text-white px-10 py-2 rounded-3xl top-10" style={{ float: "right" }} disabled={loading}>
                                Close
                            </button>
                        </div>
                    )
                }

            </Box>
        </Modal>

    )
}

export default DonateSubmissionModal