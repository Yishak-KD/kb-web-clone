/** Result type */
type Result<T, E = string> =
    | { success: true; value: T }
    | { success: false; error: E }

/** Result type with loading state */
export type LoadingResult<T, E = string> =
    | { state: 'success'; value: T }
    | { state: 'error'; error: E }
    | { state: 'loading' }

export default Result
