import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='mt-8 mb-8 lg:pl-20 lg:pr-20 pl-10 pr-10 grid lg:grid-cols-3 lg:place-items-center gap-4 md:grid-cols-3 max-sm:grid-cols-1 grid-cols-2'>
        <h1 className='text-white font-bold text-2xl'>
            METAVERSE
        </h1>
        <p className='text-gray-400'>
            Copyright @2023-2024 Pramod Thakur. All rights reserved.
        </p>
        <div className='flex space-x-3'>
            <Image src={'/twitter.svg'} alt='twitter' width={25} height={25}/>
            <Image src={'/linkedin.svg'} alt='linkedin' width={25} height={25}/>
            <Image src={'/instagram.svg'} alt='instagram' width={25} height={25}/>
            <Image src={'/facebook.svg'} alt='facebook' width={25} height={25}/>
            
        </div>
    </footer>
  )
}

export default Footer