"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { seekerDropdown } from '@/constants';
import Image from 'next/image';

const DashboardNavbar = () => {

  const pathName = usePathname();

  const currentPath = seekerDropdown.find(route => pathName === route.path);
  const name = currentPath?.label;

  return (
    <div className='flex flex-row w-full justify-between items-center'>
      <div className='flex flex-col gap-1.5'>
        <h1 className='font-bold text-3xl'>{name}</h1>
        <h2 className='font-normal text-lg'>
          Updating your information will offer you the most relevant content
        </h2>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <Image
          src="/icons/notification.png"
          alt="Notifications"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
};

export default DashboardNavbar;