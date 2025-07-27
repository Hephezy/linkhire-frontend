"use client";

import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SeekerCTA = () => {

  const router = useRouter();

  return (
    <div className="bg-[#EFF5FF] flex pt-6 px-9 w-full items-center justify-center mt-10 mb-4">
      <div className="w-[90%] items-center justify-center flex flex-row">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-[48px] text-black">Are you an employer?</h1>
          <p className="font-normal text-[16px] text-[#515151]">You can find various solutions just by accessing our platform. Because we are committed to maintaining the quality of user service</p>
          <div>
            <Button
              className='bg-[color:var(--main)] hover:bg-[color:var(--auxiliary)] cursor-pointer'
              onClick={() => { router.push("/employer") }}
            >
              Post a Job
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <Image
            src="/images/employerBanner.png"
            alt="image"
            width={500}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default SeekerCTA;