import React from 'react'
import Info from '../../info'

const TextField = ({
    label,
    error,
    ...otherProps
}) => {
    return (
        <div className='my-2'>
            <label className='flex flex-col gap-2 text-sm'>
                {label}:
                <input placeholder={label} {...otherProps} className='border-none px-2 py-2 bg-slate-50 rounded focus-within:bg-white focus:bg-white focus:outline-none' />
                {!!error && <Info type='error'>
                    {error}
                </Info>}
            </label>
        </div>
    )
}

export default TextField
