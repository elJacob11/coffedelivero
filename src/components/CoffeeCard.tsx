import React, { useState } from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"


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

  const [quantity, setQuantity] = useState(1)

  const [coffeeTab, setCoffeeTab] = useState([])

  function handleIncrease() {
    setQuantity(quantity+1)
  }

  function handleDecrease() {
    if(quantity>1) setQuantity(quantity-1)
  }

  const handleAddToCart = (e:any) => {

  }
  
  return (
    <div className={`${coffeeDesign} text-center items-center rounded-tr-sm rounded-bl-sm rounded-br-3xl rounded-tl-3xl lg:max-w-[400px] lg:min-h-[250px]`}>
      <img src={`/coffees/${coffee.photo}`} alt={`${coffee.photo}`} className=' -mt-16' />
      <div className='mt-3 mb-2'>
        {coffee.tags.map(tag => (
          <span className=' bg-[#F1E9C9] rounded-full px-[0.5rem] py-[0.25rem] text-[#C47F28] ml-2 uppercase font-bold text-[0.7rem]' key={tag}>{tag}</span>
        ))}
      </div>
      <h3 className='font-baloo text-[1.3rem] font-bold text-[#403937] pb-1'>{coffee.name}</h3>
      <p className='text-[#8D8686] font-normal text-[0.95rem] lg:min-h-[45.6px]'>{coffee.description}</p>
      <div className='pt-2 w-full'>
        <div className='flex items-center justify-between font-baloo text-[1.5rem] font-extrabold'>
          <div className='pl-5 text-gray-700'>
            ${coffee.price}
          </div>
          <div className='pr-4 flex items-center justify-center gap-4'>
            <div className='flex items-center justify-between gap-1.5 bg-[#E6E5E5] rounded-lg pl-1 pr-1'>
              <button onClick={handleDecrease} className=' border-r-2 border-gray-600 leading-5 pr-1.5'>-</button>
              {quantity}
              <button onClick={handleIncrease} className=' border-l-2 border-gray-600 leading-5 pl-1.5'>+</button>
            </div>
            <button onClick={handleAddToCart} className=' bg-[#E8D8C2] rounded-full w-9 h-9 flex justify-center items-center'>
              <ShoppingCartIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
