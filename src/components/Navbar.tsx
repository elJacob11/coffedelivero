import Logo from "@/assets/logocafe.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { MapPinIcon } from "@heroicons/react/24/outline"
import {Link} from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className="flex items-center justify-center sticky h-[6.5rem] w-full">
      <div className={`sticky ${flexBetween} top-0 z-30 w-full py-6 px-6 bg-[#ffffff]`}>
          <Link to="/">
            <div className="flex">
              <img src={Logo} width="110"/>
            </div>
          </Link>
        <div className={`${flexBetween} gap-5`}>
          <div className="flex flex-row gap-2 text-sm bg-[#EBE5F9] rounded-xl h-min w-30 text-[1.55rem] p-[0.5rem]">
            <MapPinIcon className="w-8 h-8"/>
            <p className="m-auto">Kalisz, PL</p>
            </div>
          <div>
            <Link to="/cashout">
              <ShoppingCartIcon className="h-12 w-12"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar