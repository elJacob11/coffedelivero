import React from 'react'
import {coffees} from '@/mock/coffee'
import CoffeeCard from './CoffeeCard'

type Props = {
  coffees: {}
}

const Coffees = () => {
  return (
    <div className=''>
      <h1 className=' text-3xl font-baloo m-4 pt-4'>Our coffees</h1>
      <div className="grid grid-cols place-items-center">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  )
}

export default Coffees