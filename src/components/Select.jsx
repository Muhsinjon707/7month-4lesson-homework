import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Select() {
    const [phoneNumb, setPhoneNumb] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validatePhoneNumber = (phoneNumber) => {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        return digitsOnly.length >= 10;
    };

    useEffect(() => {
        setIsValid(validatePhoneNumber(phoneNumb))
    }, [phoneNumb])

    return (
        <div>
            <label htmlFor="phone-number">
                <PhoneInput
                    className="text-black mb-3"
                    type="text"
                    id='phone-number'
                    name='phone-number'
                    value={phoneNumb}
                    onChange={setPhoneNumb}
                    placeholder='Enter phone number...'
                    country={'us'}
                    inputProps={{ required: true }}
                />
            </label>
            <p className={isValid ? 'text-green-500' : 'text-red-500'}>
                {isValid ? 'Valid phone number' : 'Please enter a valid 10-digit phone number.'}
            </p>
        </div>
    )
}

export default Select