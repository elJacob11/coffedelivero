import Logo from "@/assets/logo-cup-of-coffe.png"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 px-6`}>
      <div className="flex">
        <img src={Logo} className="w-20" />
        <h3 className="font-['Alkatra'] text-[28px] px-3">Sip 22</h3>
      </div>

    </div>
  )
}

export default Navbar