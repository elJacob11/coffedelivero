import React from 'react'

type Props = {
  coffee: {}
}

export interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export default function CoffeeCard({coffee}: CoffeeProps) {
  const coffeeDesign = " flex flex-col w-[90%] bg-[#F3F2F2] mt-[3rem] p-2 mb-8 "
  
  return (
    <div className={`${coffeeDesign} text-center items-center rounded-tr-sm rounded-bl-sm rounded-br-3xl rounded-tl-3xl`}>
      <img src={`/coffees/${coffee.photo}`} alt={`${coffee.photo}`} className=' -mt-16' />
      <div className='mt-3 mb-2'>
        {coffee.tags.map(tag => (
          <span className=' bg-[#F1E9C9] rounded-full px-[0.5rem] py-[0.25rem] text-[#C47F28] ml-2 uppercase font-bold text-[0.7rem]' key={tag}>{tag}</span>
        ))}
      </div>
      <h3 className='font-baloo text-[1.3rem] font-bold text-[#403937] pb-1'>{coffee.name}</h3>
      <p className='text-[#8D8686] font-normal text-[0.95rem]'>{coffee.description}</p>
      <div className='pt-2'>
        <div className='font-baloo text-[1.5rem] font-extrabold'>
          ${coffee.price}
        </div>
      </div>
    </div>
  )
}
