import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NFTCards = () => {
  return (
    <div className='grid grid-cols-12 gap-4 bg-gray-100 font items-center justify-center p-8'>
      <div className='col-span-8 border-2 rounded-lg'>
          <div className="flex justify-center bg-orange-700">
            <p className='mr-4'>Sneaker Head</p>
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md cursor-pointer hover:border-indigo-400'
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className='relative'>
          <Image
            src='light nft.svg'
            alt='sneaker head'
            width={800}
            height={800}
            className='object-contain'
          />
        </div>
      </div>
      <div className='col-span-4 dark:text-white'>
        <div className='bg-white shadow border-2 rounded-lg'>
          <div className='bg-orange-700 rounded-t-lg h-12'>
            <h3 className='pt-2 pb-2 pl-32 text-xl font-semibold text-gray-100'>Now Minting</h3>
          </div>
          <h4 className='text-2xl p-2'>Sneaker Heads</h4>
          <div className='flex justify-between font-semibold p-2'>
            <h3>MINTING: NOW</h3>
            <h5 className='rounded-lg bg-green-600 text-slate-100 pl-3 pr-3 pt-1 pb-1'>VERIFIED</h5>
          </div>
          <div className='flex gap-4 p-3 font-semibold'>
            <h3>NETWORK:</h3>
            <h5 className='text-gray bg-cyan-800 rounded-lg  font-semibold'>ETH</h5>
          </div>
          <p className='justify-center items-center p-5'>NFT API supporting multiple blockchains. <br />
            Full ownership, transactions and a thing <br />
            metadata. Comprehensive NFT metadata, <br />
            activity and ownership information in real <br />
            time... <span className='font-bold'>READ MORE</span>
          </p>
          <Link href='#' className='flex gap-4 p-5 justify-center items-center'>
            <button type='button' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none'>MINT</button>
            <button type='button' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none'>EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NFTCards
