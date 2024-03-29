import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { isSuccessfullStatus } from '../../../util/ResponseValidation'
import { EMAIL_REGEX } from '../../../constants/constants'
import { useState } from 'react'
import Snackbar from '@/uicomponents/SnackBar'
import { AlertColor } from '@mui/material/Alert'
import { Box, CircularProgress, Modal } from '@mui/material'

const AppDeletionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [showText, setShowText] = useState<string>("")
    const [showType, setShowType] = useState<AlertColor | undefined>()
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState(true);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const showSnackBar = ({ type, text }: { text: string, type: AlertColor | undefined }) => {
        setShowNotification(true)
        setShowType(type)
        setShowText(text)
    }

    const handleFormSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        if (EMAIL_REGEX.test(data.email)) {
            try {
                setLoading(true)

                const response = await axios.post('/api/appDeletionRequest', data)
                if (isSuccessfullStatus(response) && response) {
                    reset();
                    setShowNotification(true);
                    setShowSuccessMessage(true)
                }
            } catch (error: any) {
                console.error('An error occurred while submitting the form.')
                if (!error.response.data.success) {
                    showSnackBar({ type: 'error', text: error.response.data.message })
                }
            }
        }
        else {
            console.error('error occurred');
        }
        setLoading(false)
    }

    return (
        <div id="contact" className='mt-32 lg:w-2/4 w-full mx-auto'>

            {!showSuccessMessage ? (
                <Modal open={modalOpen} onClose={handleModalOpen}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, padding: '65px 30px', width: 600, outline: 'none',
                        '@media screen and (max-width: 760px)': {
                            padding: '20px 20px',
                            width: '100vw',
                            height: '100vh',
                            borderRadius: 0
                        }
                    }}>
                        <div>
                            <h2 className="font-semibold text-xl mb-4">Request to delete Kedus Bible account and data</h2>
                            <p className="text-base mb-4">By submitting a request to delete your Kedus Bible account and associated data you are are acknowledging that all information related to your account will be permanently removed from our database. This includes personal details, saved preferences, and any other data associated with your account. Once the deletion process is complete, it cannot be undone.</p>
                        </div>
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div>
                                <p className="font-semibold mb-3 text-lg">Name</p>
                                <TextField
                                    type="text"
                                    {...register('fullName', {
                                        required: 'Full Name is required',
                                    })}
                                    placeholder="Full Name"
                                    variant="outlined"
                                    error={!!errors.firstName}
                                    helperText={
                                        errors.fullName &&
                                        (errors.fullName.message as string)
                                    }
                                    sx={{
                                        width: '100%',
                                        marginBottom: '30px',
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        {
                                            borderBottomColor: '#6629f7',
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            fontSize: '16px',
                                            fontFamily: 'Montserrat',
                                        },
                                    }}

                                />

                            </div>
                            <div>
                                <p className="font-semibold mb-3 text-lg">Address</p>
                                <TextField
                                    type="text"
                                    {...register('email', {
                                        required: 'Email is required',

                                    })}
                                    placeholder="Email"
                                    variant="outlined"
                                    error={!!errors.email}
                                    helperText={
                                        errors.email &&
                                        (errors.email.message as string)
                                    }
                                    sx={{
                                        width: '100%',
                                        marginBottom: '18px',
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        {
                                            borderBottomColor: '#6629f7',
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            fontSize: '16px',
                                            fontFamily: 'Montserrat',
                                            outlineColor: 'purple',
                                        },
                                    }}
                                />
                            </div>
                            <button className="mt-6 bg-red-500 text-white px-20 py-2 w-full lg:text-start justify-center rounded-3xl flex mx-auto">
                                {loading ? (
                                    <>
                                        <span className="mr-2">DELETE</span>
                                        <CircularProgress
                                            style={{ color: 'white' }}
                                            size={24}
                                        />
                                    </>
                                ) : (
                                    'DELETE'
                                )}
                            </button>
                        </form>
                        <Snackbar
                            open={showNotification}
                            text={showText}
                            onClose={() => setShowNotification(false)}
                            type={showType}
                        />
                    </Box>
                </Modal>
            ) : (
                <Modal open={modalOpen} onClose={handleModalOpen}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, padding: '65px 30px', width: 600, outline: 'none',
                        '@media screen and (max-width: 760px)': {
                            padding: '100px 20px',
                            width: '100vw',
                            height: '100vh',
                            borderRadius: 0
                        }
                    }}>
                        <div className="w-full mx-auto py-10">
                            <div className="text-center w-full lg:px-0 px-8 mx-auto">
                                <h2 className="text-2xl font-semibold text-black">
                                    Thank you for providing your information!
                                </h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Your request has been successfully received.
                                </p>
                            </div>
                        </div>
                    </Box>
                </Modal>

            )}

        </div>
    )
}

export default AppDeletionForm
