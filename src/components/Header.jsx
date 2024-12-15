import React from 'react'
import logo from "/logo.png"

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full h-[5rem] flex items-center justify-center gap-2 bg-transparent from-zinc-900 to-transparent'>
        <div className='w-[1.5rem] md:w-[2rem]'>
            <img src={logo} alt="chefLogo" className='logo' />
        </div>
        {/* <h2 className="headline-1 Italiana">Chef's Mate</h2> */}
        <h2 className='text-white tracking-widest' style={{ fontFamily: 'Italiana, sans-serif'}}>Chef's Mate</h2>
    </header>
  )
}

export default Header