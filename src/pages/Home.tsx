import CoffeeCard from '@/components/CoffeeCard'
import Coffees from '@/components/Coffees'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <CoffeeCard />
      <Coffees />
    </div>
  )
}

export default Home