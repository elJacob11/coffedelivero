import React from 'react'
import BackgroundImage from "@/assets/coffeephoto.png"

type Props = {}

const CoffeeCard = (props: Props) => {
  return (
    <div>
      <img src={BackgroundImage} className=' flex justify-center m-auto' />
    </div>
  )
}

export default CoffeeCard