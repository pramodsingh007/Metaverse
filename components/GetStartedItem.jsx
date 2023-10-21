import React from 'react'

function GetStartedItem({text,order}) {
  return (
    <div className='flex items-center'>
        <div className='text-center mr-5 font-bold text-lg bg-blue-900 text-white p-4 rounded-e-2xl'>
            {order}
        </div>
        <p className='text-gray-400'>
            {text}
        </p>
    </div>
  )
}

export default GetStartedItem