import React from 'react'
import {coffees} from '@/mock/coffee'
import CoffeeCard from './CoffeeCard'

type Props = {
  coffees: {}
}

const Coffees = () => {
  return (
    <div className=''>
      <h1 className='flex justify-center items-center text-3xl font-baloo m-4 pt-4 '>Our coffees</h1>
      <div className='flex items-center justify-center'>
        <div className="grid grid-cols place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[1700px]">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Coffees