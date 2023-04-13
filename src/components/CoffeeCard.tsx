import React from 'react'
import BackgroundImage from "@/assets/mainimg.png"

type Props = {}

const CoffeeCard = (props: Props) => {
  return (
    <div>
      <img src={BackgroundImage} className=' flex shadow-3xl m-auto' />
      <div className='font-montserrat justify-center'>
        <h1 className='font-baloo text-[3rem]'>Find the perfect coffee for any time of the day</h1>
        <h3 className=' '>With our service Coffee Delivery you get your coffee wherever you are, anytime</h3>
        <div>
          <ul>
            <li>Simple and secure purchase</li>
            <li>Packaging keeps coffee intact</li>
            <li>Fast and tracked delivery</li>
            <li>The coffee comes fresh to you</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard