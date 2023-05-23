import Logo from "@/assets/logocafe.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { MapPinIcon } from "@heroicons/react/24/outline"
import {Link} from 'react-router-dom';
import { useState } from "react";

type Props = {}


const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [amount, setAmount] = useState(0)
  return (
    <div className=" flex items-center justify-center sticky h-[6.5rem] w-full md:h-[7.5rem] xl:w-[1280px] xl:mx-auto">
      <div className={`sticky ${flexBetween} top-0 z-30 w-full py-6 px-6 bg-transparent`}>
          <Link to="/">
            <div className="flex">
              <img src={Logo} className=" pt-8 w-[110px] md:w-[140px]"/>
            </div>
          </Link>
        <div className={`${flexBetween} gap-3 pt-8 md:gap-5`}>
          <div className="flex flex-row gap-2 text-sm bg-[#EBE5F9] rounded-xl h-min w-30 text-[1.55rem] p-[0.5rem] md:w-[150px] md:h-19 md:items-center">
            <MapPinIcon className="w-8 h-8 md:w-11 md:h-11"/>
            <p className="m-auto md:text-[1.2rem]">Kalisz, PL</p>
            </div>
          <div className="relative">
            <Link to="/cashout">
              <ShoppingCartIcon className="h-12 w-12 md:h-14 md:w-14"/>
              {amount>0 ? (<div 
              className="rounded-full bg-red-600 flex items-center justify-center w-6" 
              style={{ 
                color: "white",
                position: "absolute",
                bottom: 0,
                right: 0,
                }}>{amount}</div>) : (
                  <div></div>
                )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar