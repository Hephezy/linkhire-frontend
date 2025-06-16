import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full'>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='flex w-full py-3 px-9'>
          <div className='flex flex-row w-full items-center justify-between'>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
        <div className='bg-[#EDEDED] flex w-full py-3 px-9'>
          <div className='flex flex-row w-full items-center justify-between'>
            <h2 className='font-semibold text-xl'>LinkHire Copyright 2025</h2>

            <div className='flex flex-row items-center justify-center space-x-6'>
              <h2>1</h2>
              <h2>2</h2>
              <h2>3</h2>
              <h2>4</h2>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;