import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EmployerHeader = () => {
  return (
    <section className='flex w-[95%] flex-row justify-between items-center pb-3 rounded-xl mt-4'>
      <div className='flex w-full'>
        <div className='flex w-full mt-12 mb-8 flex-row justify-between items-center'>
          <div className='flex w-1/2'>
            <div className='flex flex-col w-full'>
              <h1 className='font-extrabold text-[72px] leading-none'>Hire Smarter,</h1>
              <h1 className='font-extrabold text-[72px] leading-none'>Grow Faster with</h1>
              <h1 className='text-[color:var(--main)] font-extrabold text-[72px] leading-none'>LinkHire!</h1>

              <h3 className='mt-5 font-medium text-[20px] text-[#757575] w-[80%]'>Post your job openings on LINKHIRE and connect with thousands of top professionals. With advanced tools, smart matching systems, and a user-friendly </h3>

              <div className='mt-5 w-[50%] flex flex-row gap-3 items-center'>
                <Button className='bg-[color:var(--main)] hover:bg-[color:var(--auxiliary)] w-full py-5'>Post a Job</Button>
              </div>
            </div>
          </div>
          <div className='flex w-1/2'>
            <Image
              src="/images/employerHome.png"
              alt="seeker"
              width={550}
              height={400}
            /></div>
        </div>
      </div>
    </section>
  );
};

export default EmployerHeader;