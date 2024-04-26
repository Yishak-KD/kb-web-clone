import { Close } from "@mui/icons-material"
import { Box, CircularProgress, Modal, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { DonationPreference } from "./Donate"
import axios from "axios"
import { EMAIL_REGEX } from "../../../../constants/constants"
import { useState } from "react"
import ReactGA from "react-ga4";

interface DonateSubmissionModalProps {
    open: boolean
    onClose: () => void
    donationPreference: DonationPreference | undefined
}

interface DonationUserInfo {
    fullName: string
    email: string
}

const DonateSubmissionModal = ({ open, onClose, donationPreference }: DonateSubmissionModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DonationUserInfo>()
    const [loading, setLoading] = useState<boolean>(false)

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
                    amount: donationPreference.amount,
                    paymentMethod: donationPreference.paymentMethod,
                    frequency: donationPreference.frequency
                }
            );

            if (response.status === 200) {
                window.open("https://www.paypal.com/paypalme/KedusBible", "_blank");
                reset()
                onClose()

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

    return (
        <Modal open={open} onClose={() => onClose()}>
            <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, padding: '65px 30px', width: 600, outline: 'none',
                '@media screen and (max-width: 760px)': {
                    padding: '100px 20px',
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0
                }
            }}>
                <div className="relative lg:top-[-25px] md:top-[-20px] top-[-50px] flex float-end hover:cursor-pointer w-fit" style={{ marginTop: '-20px' }} onClick={onClose}>
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

    )
}

export default DonateSubmissionModal