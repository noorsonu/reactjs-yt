import React from 'react'

const Card = (props, idx) => {
    return (
        <div key={idx}>
            <a href={props.elem.url} target='_blank'>
                <div className='h-40 w-44 overflow-hidden rounded-xl' key={idx}>
                    <img className=' h-full w-full object-cover '
                        src={props.elem.download_url}
                        alt="" />
                </div>
                <h2 className='font-bold text-lg'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card