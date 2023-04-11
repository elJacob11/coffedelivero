import Logo from "@/assets/logo-cup-of-coffe.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import {Link} from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 px-6`}>
        <Link to="/">
          <div className="flex">
            <img src={Logo} className="w-20" />
            <h3 className="font-['Alkatra'] text-[22px] text-gray-500 relative top-16 right-2 h-10">Sip 22</h3>
          </div>
        </Link>
      <div className={`${flexBetween} gap-8`}>
        <div className="text-lg bg-[#EBE5F9] rounded-xl h-[2.3rem] w-min text-[1.5rem] p-[0.5rem]"> Kalisz, PL</div>
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