import React from 'react'
import {coffees} from '@/mock/coffee'

type Props = {
  coffees: {}
}

type coffees = {
  id: number;
  name: String;
  tags: [];
  description: String;
  photo: String;
  price: number;
}

const Coffees = (props: Props ) => {
  return (
    <div className='relative'>
      <h1 className=' text-3xl font-baloo m-4 pt-4'>Our coffees</h1>
      <div>
        {coffees.map((coffee) => {
          return(
            <div key={coffee.id}>
              <img src={`/coffees/${coffee.photo}`} alt="" />
              {coffee.name}
              {coffee.tags}
              {coffee.description}
              {coffee.price}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Coffees