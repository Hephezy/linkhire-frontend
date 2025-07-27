"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import { Button } from '@/components/ui/button';

const NameCard = () => {

  const [editable, setEditable] = useState(false);

  return (
    <Card className="flex flex-col py-4 w-full">
      <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/icons/user.png"
            alt="user"
            width={32}
            height={32}
          />
          <h2 className='font-bold text-xl'>Full Name</h2>
        </div>

        {editable
          ?
          <>

          </>
          :
          <>
            <Image
              src="/icons/edit.png"
              alt="edit"
              width={32}
              height={32}
              onClick={() => setEditable(true)}
              className='cursor-pointer'
            />
          </>
        }
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
              <Button className='bg-[color:var(--main)] hover:bg-[color:var(--auxiliary)] cursor-pointer' size="default">
                Save
              </Button>
              <Button className='bg-[#ededed] hover:bg-[#ededed] text-black cursor-pointer' size="default">
                Cancel
              </Button>

            </div>
          </>
          :
          <>
            <div className='flex flex-row px-6 justify-between'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-semibold'>First Name</h2>
                <p className='text-sm font-medium'>John</p>
              </div>
              <div className='flex flex-col gap-2 mr-48'>
                <h2 className='text-lg font-semibold'>Last Name</h2>
                <p className='text-sm font-medium'>Doe</p>
              </div>
            </div>
          </>
        }
      </div>
    </Card>
  );
};

export default NameCard;