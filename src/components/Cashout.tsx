import React from 'react'
import { MapPinIcon, CurrencyDollarIcon, BanknotesIcon, CreditCardIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline"
import ButtonPayment from './ButtonPayment'
import {useState} from 'react';

type Props = {}

const Cashout = (props: Props) => {
  const inputStyle = "border border-neutral-400 rounded-md pl-1 max-w-[400px] mx-auto w-[80%]"
  const [num, setNum] = useState('')
  const [numPhone, setNumPhone] = useState('')
  const handleNumPostcode = (e: any) => {
    const limit = 5;
    setNum(e.target.value.slice(0, limit))
  }
  const handleNumPhone = (e: any) => {
    const limit = 9;
    setNumPhone(e.target.value.slice(0, limit))
  }
  
  return (
    <div>
      <div className=' mt-8 bg-[#FAFAFA]'>
        <h3 className=' flex items-center justify-center mx-auto pb-3 font-baloo text-[1.6rem] border-b-2 max-w-[90%] xl:max-w-[1600px] '>Complete your order</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-[1500px] md:mx-auto'>
          <div className='grid grid-cols-1 mt-6'>
            <div className='bg-[#F3F2F2] w-[80%] rounded-xl p-5 m-auto max-w-lg'>
              <div className='flex items-center gap-1 pb-4'>
                <MapPinIcon className='w-9'/> 
                <h3 className='text-[1.2rem] font-montserrat'>Delivery Address</h3>
              </div>
              <div className=''>
                <form action="" className='grid grid-cols-1 gap-4 xx:grid-cols-2'>
                  <input type="text" placeholder='First Name' className={`${inputStyle} xx:col-span-2`}/>
                  <input type="text" placeholder='Last Name' className={`${inputStyle} xx:col-span-2`}/>
                  <input type="text" placeholder='Address Line' className={`${inputStyle} xx:col-span-2`}/>
                  <input type="text" placeholder='Town/city' className={`${inputStyle} xx:w-[90%] xx:mx-12`}/>
                  <input type="number" placeholder='Postcode' value={num} onChange={handleNumPostcode} className={`${inputStyle} xx:w-[59%] xx:mx-11.5`}/>
                  <input type="number" placeholder='Phone Number' value={numPhone} onChange={handleNumPhone} className={`${inputStyle} xx:col-span-2`}/>
                </form>
              </div>
            </div>
            <div className='bg-[#F3F2F2] w-[80%] rounded-xl p-5 m-auto mt-5 max-w-lg'>
              <div className='flex items-center gap-1 pb-4'>
                <CurrencyDollarIcon className='w-8'/>
                <h3 className='text-[1.2rem] font-montserrat'>Payment Method</h3>
              </div>
              <div className='grid grid-cols-1 '>
                <ButtonPayment icon={<CreditCardIcon />} description="Credit Card" />
                <ButtonPayment icon={<DevicePhoneMobileIcon />} description="Paypal" />
                <ButtonPayment icon={<BanknotesIcon />} description="Cash"/>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-6 bg-[#F3F2F2] rounded-xl'>
            <h4>Products you picked</h4>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Cashout