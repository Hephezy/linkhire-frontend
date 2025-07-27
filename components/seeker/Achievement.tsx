import React from 'react'
import { Card } from '../ui/card';
import Image from 'next/image';

const Achievement = () => {
  return (
    <div className='w-full flex flex-row px-9 justify-between gap-3 mt-16'>
      <div className='flex w-[60%]'>
        <div className='flex flex-col w-1/2 gap-4'>
          <h2 className='font-semibold text-[32px] text-black'>Our Achievements in Hiring</h2>
          <p className='font-normal text-[12px] text-[#757575]'>Whether you're an employer looking for top talent or a job seeker searching for the perfect role, our platform has helped hundreds of professionals find success. Be the next one to achieve your career goals!</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 w-[50%] mt-6'>
        <Card className='p-3 flex flex-row gap-4'>
          <div className='p-3 rounded-lg bg-[#EFF5FF]'>
            <Image
              src="/icons/user-check.png"
              alt="check"
              width={32}
              height={32}
            />
          </div>
          <div className='w-full'>
            <h3 className='font-semibold text-[16px] text-black'>300+</h3>
            <p className='font-normal text-[14px] text-[#757575]'>Profile Boost</p>
          </div>
        </Card>
        <Card className='p-3 flex flex-row gap-4'>
          <div className='p-3 rounded-lg bg-[#EFF5FF]'>
            <Image
              src="/icons/user-check.png"
              alt="check"
              width={32}
              height={32}
            />
          </div>
          <div className='w-full'>
            <h3 className='font-semibold text-[16px] text-black'>999+</h3>
            <p className='font-normal text-[14px] text-[#757575]'>Easy Applications</p>
          </div>
        </Card>
        <Card className='p-3 flex flex-row gap-4'>
          <div className='p-3 rounded-lg bg-[#EFF5FF]'>
            <Image
              src="/icons/user-check.png"
              alt="check"
              width={32}
              height={32}
            />
          </div>
          <div className='w-full'>
            <h3 className='font-semibold text-[16px] text-black'>400+</h3>
            <p className='font-normal text-[14px] text-[#757575]'>Interviews</p>
          </div>
        </Card>
        <Card className='p-3 flex flex-row gap-4'>
          <div className='p-3 rounded-lg bg-[#EFF5FF]'>
            <Image
              src="/icons/user-check.png"
              alt="check"
              width={32}
              height={32}
            />
          </div>
          <div className='w-full'>
            <h3 className='font-semibold text-[16px] text-black'>600+</h3>
            <p className='font-normal text-[14px] text-[#757575]'>Successful hires</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Achievement;