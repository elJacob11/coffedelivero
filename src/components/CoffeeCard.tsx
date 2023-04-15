import React from 'react'
import BackgroundImage from "@/assets/mainimg.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import ClockIcon from '@/assets/clock.png'
import CoffeeIcon from '@/assets/coffeecup.png'
import DeliveryIcon from '@/assets/package.png'


type Props = {}

const CoffeeCard = (props: Props) => {
  const designIcon = "flex justify-center items-center rounded-[50%] h-10 w-10"
  const divDesign = "flex items-center gap-5 m-4 font-normal"
  return (
    <div className='relative'>
      <img src={BackgroundImage} className=' flex shadow-3xl m-auto' />
      <div className='font-montserrat justify-center'>
        <h1 className='font-baloo text-[3rem] m-4 mt-0'>Find the perfect coffee for any time of the day</h1>
        <h3 className=' text-xl m-4 font-normal'>With our service Coffee Delivery you get your coffee wherever you are, anytime</h3>
        <div className=' text-lg'>
          <div className={`${divDesign}`}> <div className={`${designIcon} bg-[#C47F17] `}><ShoppingCartIcon className='w-8 h-8'/></div> Simple and secure purchase</div>
          <div className={`${divDesign}`}> <div className={`${designIcon} bg-[#574F4D] `}><img src={DeliveryIcon} className='h-7 w-7'/></div> Packaging keeps coffee intact</div>
          <div className={`${divDesign}`}> <div className={`${designIcon} bg-[#DBAC2C] `}><img src={ClockIcon} className='h-7 w-7'/></div> Fast and tracked delivery</div>
          <div className={`${divDesign}`}> <div className={`${designIcon} bg-[#8047F8] `}><img src={CoffeeIcon} className='h-7 w-7'/></div> The coffee comes fresh to you</div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard