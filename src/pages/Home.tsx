import Coffees from '@/components/Coffees'
import React from 'react'
import Info from '@/components/Info'
import { coffees } from '@/mock/coffee'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Info />
      <Coffees coffees={coffees}/>
    </div>
  )
}

export default Home