import React from 'react'

const Counter = () => {
  return (
    <div>
      <div className="pt-5 mt-[100px]">

        <div className='flex justify-center items-center mt-4 gap-3 mb-2'>
          <button className='bg-yellow-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Total registered candidate: (120)</button>
          <button className='bg-green-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Trained candidate: (50)</button>
          <button className='bg-blue-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>New registration candidate: (15)</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
