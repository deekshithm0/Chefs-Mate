import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-full h-[5rem] flex items-center justify-center gap-2 bg-gradient-to-b from-zinc-800 to-transparent'>
        <div className='w-[1.5rem] md:w-[2rem]'>
            <img src="/logo.png" alt="chefLogo" className='logo' />
        </div>
        {/* <h2 className="headline-1 Italiana">Chef's Mate</h2> */}
        <h2 className='text-white tracking-widest' style={{ fontFamily: 'Italiana, sans-serif' }}>Chef's Mate</h2>

    </div>
  )
}

export default Header