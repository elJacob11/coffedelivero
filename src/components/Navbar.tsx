import Logo from "@/assets/logocafe.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { MapPinIcon } from "@heroicons/react/24/outline"
import {Link} from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`sticky ${flexBetween} top-0 z-30 w-full py-6 px-6 bg-[#F7F7F7]`}>
        <Link to="/">
          <div className="flex">
            <img src={Logo} width="130"/>
          </div>
        </Link>
      <div className={`${flexBetween} gap-8`}>
        <div className="flex flex-row gap-2 text-lg bg-[#EBE5F9] rounded-xl h-min w-30 text-[1.55rem] p-[0.7rem]">
          <MapPinIcon className="w-10 h-10"/>
          <p className="m-auto">Kalisz, PL</p>
          </div>
        <div>
          <Link to="/cashout">
            <ShoppingCartIcon className="h-14 w-14"/>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar