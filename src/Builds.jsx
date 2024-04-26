import { useState } from 'react'

function Builds() {
  return (
      <div className='h-screen grid grid-flow-row grid-row-3 grid-cols-2 gap-2'>
        <div className='bg-hextech-blue-700 shadow-xl rounded-md w-1/2 h-1/2 h-full m-auto mr-2'>
          <h1 className='text-hextech-blue-200 ml-2'>Start a New Build</h1>
          <div className='grid grid-flow-row grid-cols-8 grid-rows-8 gap-1 h-full'>
            <div className='bg-hextech-gold-300 row-span-2 col-span-2'>image</div>
            <div className='bg-hextech-gold-500 col-span-6 row-span-2 rounded-md'>keystone runes</div>
            <div className='bg-hextech-gold-500 col-span-6 row-span-4 col-span-6 col-start-3 rounded-md'>runes and masteries</div>
            <div className='bg-hextech-gold-300 row-span-2 col-span-2 row-start-3'>lane</div>
          </div>
        </div>

        <div className='bg-hextech-blue-800 shadow-xl rounded-md w-1/2 h-1/2 h-full m-auto ml-2'>
          <h1 className='text-hextech-blue-200 ml-2'>Notes</h1>
        </div>
      </div>
  )
}

export default Builds
