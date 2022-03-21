import { ReactElement, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';


type FormFieldProps = {
    className?: any,
    error?: boolean,
    handleFormValueChange: (e: ChangeEvent<HTMLInputElement>) => void,
    helperText?: string,
    id: string,
    label: string,
    multiLine?: boolean,
    name: string,
    rows?: number,
    type?: string,
    value: string
}

export const FormField = ({
    className,
    error = false,
    handleFormValueChange,
    helperText = '',
    id,
    label,
    multiLine = false,
    name,
    rows = 1,
    type = 'text',
    value
}: FormFieldProps): ReactElement => {
    return (
        <TextField className={className} margin='normal' multiline={multiLine} rows={rows} name={name} error={error} fullWidth variant='outlined' type={type} id={id} aria-label={label} label={label} value={value} onChange={handleFormValueChange} helperText={error && helperText} />
    )
}