"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';

const NotificationCard = () => {
  return (
    <Card className="flex flex-col py-4 w-full">
      <div className="flex flex-row gap-2 px-4 items-center">
        <Image
          src="/icons/notification.png"
          alt="email"
          width={32}
          height={32}
        />
        <h2 className='font-bold text-xl'>Notifications</h2>
      </div>
      <div className='flex flex-col gap-3'>
        <div className="flex flex-row items-center justify-between w-full px-4">
          <div className='flex flex-col gap-1.5'>
            <h2 className='font-semibold text-lg'>
              New job
            </h2>
            <p className='font-medium text-sm'>
              Notify me when an employer rejected me.
            </p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-4">
          <div className='flex flex-col gap-1.5'>
            <h2 className='font-semibold text-lg'>
              Application result
            </h2>
            <p className='font-medium text-sm'>
              Notify me when an employer rejected me.
            </p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-4">
          <div className='flex flex-col gap-1.5'>
            <h2 className='font-semibold text-lg'>
              Messages
            </h2>
            <p className='font-medium text-sm'>
              Notify me when an employer rejected me.
            </p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NotificationCard