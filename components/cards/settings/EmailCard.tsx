"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const EmailCard = () => {

  const [editable, setEditable] = useState(false);

  return (
    <Card className="flex flex-col py-4 w-full">
      <div className="flex flex-row gap-2 px-4 items-center">
        <Image
          src="/icons/account.png"
          alt="email"
          width={32}
          height={32}
        />
        <h2 className='font-bold text-xl'>Account</h2>
      </div>
      <div>
        {editable
          ?
          <>
            <div className='flex flex-row px-6 justify-between'>
              <div className='flex flex-col gap-2'></div>
              <div className='flex flex-col gap-2 mr-48'></div>
            </div>

            <div className='flex flex-row px-6 gap-6'>
              <Button
                className='bg-[color:var(--main)] hover:bg-[color:var(--auxiliary)] cursor-pointer'
                size="default"
                onClick={() => setEditable(false)}
              >
                Save
              </Button>
              <Button
                className='bg-[#ededed] hover:bg-[#ededed] text-black cursor-pointer'
                size="default"
                onClick={() => setEditable(false)}
              >
                Cancel
              </Button>
            </div>
          </>
          :
          <>
            <div className="flex flex-row items-center justify-between w-full px-4">
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-semibold'>Email Address</h2>
                <p className='text-sm font-medium'>johndoe@gmail.com</p>
              </div>
              <div>
                <Button
                  className='border-[color:var(--main)] border bg-white text-[color:var(--main)] hover:bg-white cursor-pointer'
                  onClick={() => setEditable(true)}
                >
                  Reset Email
                </Button>
              </div>
            </div>
          </>
        }
      </div>
    </Card>
  )
}

export default EmailCard;