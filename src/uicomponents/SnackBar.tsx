import Alert, { AlertProps } from '@mui/material/Alert'
import MUISnackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

interface SnackbarProps {
    open: boolean
    type: AlertProps['severity']
    autoHideDuration?: number
    text: string
    onClose: () => void
    anchorOrigin?: SnackbarOrigin
}

const Snackbar = ({
    open,
    text,
    type,
    autoHideDuration = 3000,
    onClose,
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
}: SnackbarProps) => {
    return (
        <MUISnackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
        >
            <Alert severity={type} sx={{ width: '100%' }} onClose={onClose}>
                {text}
            </Alert>
        </MUISnackbar>
    )
}

export default Snackbar
