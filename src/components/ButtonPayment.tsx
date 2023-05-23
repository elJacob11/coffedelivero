import React from 'react'


type Props = {
  icon: JSX.Element,
  description: string
}

const ButtonPayment = (props: Props) => {
  return (
    <div>
      <button className='flex items-center gap-3 border border-neutral-700 rounded-md w-[90%] h-14 m-auto mb-5 pl-3 max-w-[220px] xx:max-w-[300px] lg:max-w-[220px]'>
        <div className=' w-10 xx:w-12 lg:w-10'>
          {props.icon} 
        </div>
        <div className=''>
          {props.description}
        </div>
      </button>
    </div>
  )
}

export default ButtonPayment