import React from 'react'

const Main = () => {
  return (
    <main className='main-content w-full h-screen grid place-items-center bg-gradient-to-b from-zinc-950 to-zinc-500'>
      <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8'>
        <div className='w-full h-80 flex items-center text-center text-wrap p-4  '>
          <h1 className='headline-1 text-5xl md:text-6xl font-bold'>Choose flavors, relish the recipe!</h1>
        </div>
        <form action='' className='px-4 grid gap-7 pt-32 md:pt-0'>
          <input
            type='text'
            placeholder='eg. Onion'
            aria-label='Add ingredient'
            className='px-4 py-2 rounded-md hover:bg-zinc-400 transition-colors '
          />
          <button className='bg-sky-400 rounded-md w-full h-8 text-zinc-900 text-sm px-2'>Add ingredient</button>
        </form>
      </div>
    </main>
  )
}

export default Main
