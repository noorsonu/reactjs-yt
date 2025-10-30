import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 text-2xl font-semibold flex justify-center items-center'>{props.id}</h2>
            <div >
                <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias neque dolore molestiae eius quam.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent