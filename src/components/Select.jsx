import React, { useState, useEffect } from 'react'
import countries from "../assets/countries.json"

function Select() {
    const [phoneNumb, setPhoneNumb] = useState('');
    const [isValid, setIsValid] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const countryList = countries.countries;

    const [defaultData, setDefault] = useState(countryList[0] || {});
    console.log(12, defaultData);

    const validatePhoneNumber = (phoneNumber, country) => {
        if (!country || !country.number_length) return false;
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        return digitsOnly.length === country.number_length;
    };

    useEffect(() => {
        setIsValid(validatePhoneNumber(phoneNumb, defaultData))
    }, [phoneNumb, defaultData])

    return (
        <div className='w-full text-black flex flex-col items-center justify-center'>
            <div className="w-[60%] flex flex-col items-center justify-center gap-4">
                <input
                    value={phoneNumb}
                    onChange={(e) => setPhoneNumb(e.target.value)}
                    className='bg-white w-full py-2 px-3 rounded-md outline-none focus:border'
                    type="text"
                    name='tel'
                    placeholder="Enter phone number..."
                />
                {
                    !isOpen && (
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='
                                w-full bg-white h-[4rem] rounded-md transition duration-75 text-black 
                                flex items-center justify-between gap-2 p-2 cursor-pointer
                            '>
                            <img src={defaultData.flag || countryList[0].flag} alt={defaultData.name || ''} />
                            <span>{defaultData.name}</span>
                        </div>
                    )
                }
                {
                    isOpen && (
                        <div className='w-full relative flex flex-col items-start justify-center gap-2'>
                            <span className='absolute top-0 right-0 hidden'>✖</span>
                            <ul className='w-full max-h-[80px] hover:max-h-[200px] overflow-auto bg-gray-300 px-3 py-2 outline-none rounded-md'>
                                {
                                    countryList.length > 0 && countryList.map((county, index) => {
                                        return (
                                            <li onClick={() => {
                                                setDefault(county);
                                                setIsOpen(false);
                                            }} className='
                                                listEle text-black hover:bg-gray-200 flex gap-2 items-center justify-between
                                            '
                                                key={index}>
                                                <img src={county.flag} alt={county.name} />
                                                <span className='text-[1.3rem]'>{county.name}</span>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
                {
                    isValid ? <p className='text-green-300'>Valid input...</p> : <p className='text-red-500'>Not valid input...</p>
                }
            </div>
        </div>
    )
}

export default Select