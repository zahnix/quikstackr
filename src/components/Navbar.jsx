import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <div className='flex items-center gap-2 text-xl font-bold'>
        <img src='/quickstackr.png' alt="quickstackr logo" className="w-8 h-8"/>
        <span>Quickstackr</span>
      </div> 
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        {/* MOBILE BUTTON */}
          <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
            {open ? 'x' : '≡'}
          </div>
        {/* MOBILE LINK LIST */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#f4f4f6] transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-2 px-4 rounded-2xl bg-[#000000] text-white">Login</button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 rounded-2xl bg-[#000000] text-white">Login</button>
        </a>
      </div>
        {/* DESKTOP BUTTON */}

        {/* DESKTOP LINK LIST */}
    </div>
  )
}

export default Navbar
