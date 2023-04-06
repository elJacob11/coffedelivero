import Logo from "@/assets/logo-cup-of-coffe.png"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 px-6`}>
      <div className="flex">
        <img src={Logo} className="w-20" />
        <h3 className="font-['Alkatra'] text-[22px] relative top-16 right-2">Sip 22</h3>
      </div>
      <div className={`${flexBetween} gap-8`}>
        <button className="text-[22px] rounded-xl">Contact us</button>
        <ShoppingCartIcon className="h-14 w-14"/>
      </div>

    </div>
  )
}

export default Navbar