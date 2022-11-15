import React from 'react'

const Card = ({item}) => {
  return (
    <div className="w-fit p-3 border border-[#D7D7D7] rounded-[15px] cursor-pointer">
        <img className="h-[120px] mx-auto lg:h-[220px] mb-4" src={item.img} alt="Inspirations" />
        <div className="flex flex-col lg:flex-row text-[8px] lg:text-[10px] justify-between my-2">
            <p className="mb-2">{item.name}</p>
            <p className="font-bold">{item.price}</p>
        </div>
        <div className="flex flex-col lg:flex-row text-[8px] lg:text-[10px] justify-between my-2">
            <p className="mb-2">{item.distance}</p>
            <p>{item.availability}</p>
        </div>
        <span>
            <img src={item.rating} alt="StarRating" className="h-[10px] lg:h-[15px]" />
        </span>
    </div>
  )
}

export default Card;