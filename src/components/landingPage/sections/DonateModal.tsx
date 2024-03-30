import { Close } from "@mui/icons-material";
import { Box, CircularProgress, Modal, TextField } from "@mui/material";
import { useEffect } from "react";
import { EMAIL_REGEX } from "../../../../constants/constants";

const DonateModal=({clearErrors,modalOpen,handleModalClose,register,errors,loading,onSubmit}:any)=>{
    useEffect(()=>{
        clearErrors('fullName')
        clearErrors('email')
    },[modalOpen])
    return <Modal open={modalOpen} onClose={handleModalClose}>
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

                className="border border-slate-300 mb-8"
            />
        </div>
        <button onClick={onSubmit} type='submit' className="bg-black hover:bg-black text-white px-10 py-2 rounded-3xl top-10" style={{ float: "right" }} disabled={loading}>
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

    </Box>
</Modal>
}

export default DonateModal;