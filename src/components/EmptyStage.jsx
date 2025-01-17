import React from 'react'
import emptySvg from '../image/empty.svg'

const EmptyStage = () => {
    return (
        <div className=" flex flex-col justify-center items-center py-10">
            <img width={150} className=" mb-5" src={emptySvg} alt="empty-img" />
            <p className="text-sm text-center text-gray-600 font-normal tracking-widest">There is no list...</p>
        </div>
    )
}

export default EmptyStage