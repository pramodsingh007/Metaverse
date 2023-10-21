import Image from 'next/image'
import React from 'react'

function WhatsNewCard({title,text,img}) {
  return (
    <div className='space-y-4'>
        <div className='flex'>
            <div className=' bg-blue-900 p-4 rounded-2xl'>
            <Image  src={`/${img}`} alt={img} width={40} height={40}/>
            </div>
        </div>
        <h1 className='text-white text-2xl font-bold'>{title}</h1>
        <p className='text-gray-400 text-lg'>{text}</p>
    </div>
  )
}

export default WhatsNewCard