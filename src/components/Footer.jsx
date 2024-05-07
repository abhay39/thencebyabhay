import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-[#F5F5F5] w-full p-4 rounded-3xl flex  flex-col md:flex-row justify-between mt-9 text-[16px] h-[100px] items-center'>
        <p className=' text-center text-[18px] text-[#1C1C1C]'>© Talup 2023. All rights reserved.</p>
        <div className='flex justify-between gap-8 items-center'>
            <p className=' text-center underline text-[18px] text-[#1C1C1C] cursor-pointer'>Privacy Policy</p>
            <p className=' text-center underline text-[18px] text-[#1C1C1C] cursor-pointer'>Terms of Use</p>
            
        </div>
    </footer>
  )
}

export default Footer