import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

const Seeker = () => {
  return (
    <div className='flex w-full mt-12 mb-8 flex-row justify-between items-center'>
      <div className='flex w-1/2'>
        <div className='flex flex-col w-full'>
          <h1 className='font-extrabold text-[72px] leading-none'>Your Future</h1>
          <h1 className='font-extrabold text-[72px] leading-none'>Starts with</h1>
          <h1 className='text-[color:var(--main)] font-extrabold text-[72px] leading-none'>LinkHire</h1>

          <h3 className='mt-5 font-medium text-[20px] text-[#757575]'>Discover jobs that match your skills and passion.Type and explore!</h3>

          <div className='mt-5 flex flex-row gap-3 items-center'></div>

          <div className='mt-5 flex flex-row gap-3 items-center'>
            <div className='className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>

            <h2 className='font-medium text-[16px] '>Over <span className='text-[color:var(--main)]'>999+</span> jobseeker are successfully hired </h2>
          </div>
        </div>
      </div>
      <div className='flex w-1/2'>
        <Image
          src="/images/seekerHome.png"
          alt="seeker"
          width={600}
          height={400}
        />
      </div>
    </div>
  )
}

export default Seeker