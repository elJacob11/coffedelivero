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
  const coffeeDesign = " w-100 bg-[#F3F2F2] "
  
  return (
    <div className={`${coffeeDesign}`}>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <div>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div>
          {coffee.price}
      </div>
    </div>
  )
}
