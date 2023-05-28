import React from 'react'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='bg-custom justify-between items-center flex p-5 border-none'>
        <div className='p-2'>
            <Image 
                src='/logo.png' 
                width={203} 
                height={150}
                alt='logo'
                className=''
                />
        </div>
        <div>
            <p className='text-gray-300 font-sans font-semibold '>
                Already have an account?
            </p>
        </div>
    </div>
  )
}
