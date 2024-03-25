import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { isSuccessfullStatus } from '../../../util/ResponseValidation'
import { EMAIL_REGEX } from '../../../constants/constants'
import { useState } from 'react'
import Snackbar from '@/uicomponents/SnackBar'
import { AlertColor } from '@mui/material/Alert'

const UserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [showText, setShowText] = useState<string>("")
    const [showType, setShowType] = useState<AlertColor | undefined>()

    const showSnackBar = ({ type, text }: { text: string, type: AlertColor | undefined }) => {
        setShowNotification(true)
        setShowType(type)
        setShowText(text)

    }

    const handleFormSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        // showSnackBar({ type: 'success', text: 'successfull' })

        if (EMAIL_REGEX.test(data.email)) {
            try {
                const response = await axios.post('/api/userInformation', data)
                console.log(response)
                console.log('==========================')

                if (isSuccessfullStatus(response) && response) {
                    reset();

                    showSnackBar({ type: 'success', text: response.data.message })
                }
            } catch (error: any) {
                console.warn('An error occurred while submitting the form.')
                if (error.response.data) {
                    showSnackBar({ type: 'error', text: error.response.data.message })
                }

            }
        }
        else {
            console.warn('error');
        }
    }

    return (
        <div id="contact" className='mt-32 lg:w-2/4 w-full mx-auto'>
            <div className='text-center text-2xl font-semibold'>
                <h1>Submit user information</h1>
            </div>
            <div className='mt-10 lg:w-2/4 w-full lg:px-0 px-8 mx-auto'>
                <div >
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div>
                            <TextField
                                type="text"
                                {...register('fullName', {
                                    required: 'Full Name is required',
                                })}
                                placeholder="Full Name"
                                variant="outlined"
                                error={!!errors.firstName}
                                helperText={
                                    errors.firstName &&
                                    (errors.firstName.message as string)
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

                        <button className="mt-6 bg-black text-white px-20 py-2 w-full lg:text-start justify-center rounded-3xl flex mx-auto">SUBMIT</button>

                        {/* <button type="submit" className='border-2 border-red-400 '> */}

                        {/* </button> */}
                        {/* {contactUsError && (
                            <span className={styles.contactUsError}>
                                {contactUsError}
                            </span>
                        )} */}
                    </form>

                    <Snackbar
                        open={showNotification}
                        text={showText}
                        onClose={() => setShowNotification(false)}
                        type={showType}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserForm
