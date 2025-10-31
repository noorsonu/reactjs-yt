import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className='py-3 px-5 '>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-red-500 px-5 py-2 rounded m-4 cursor-pointer active:scale-95'>
                Return to home page
            </button>

            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-red-500 px-5 py-2 rounded m-4 cursor-pointer active:scale-95'>
                Back
            </button>

            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='bg-red-500 px-5 py-2 rounded m-4 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}

export default Navbar2