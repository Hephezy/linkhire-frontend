"use client";

import { seekerDropdown } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const LeftSideBar = () => {
  const pathName = usePathname();

  return (
    <section className='bg-white fixed left-0 top-0 flex h-screen flex-col p-4 max-sm:hidden lg:w-[266px] z-10'>
      <div className='flex items-center justify-center'>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={110}
          height={30}
        />
      </div>

      <div className='flex flex-col mt-6 w-full'>
        <h2 className='text-black p-2'>Main</h2>

        <div className='flex flex-col mt-6 gap-8 w-full'>
          {seekerDropdown.map((item, index) => {
            const isActive = pathName === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                className={` ${isActive ? "py-3 bg-[color:var(--accentTwo)]" : ""} flex pl-3 flex-row gap-2 items-center w-full`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                ) : null}
                <h2 className='text-base font-semibold'>{item.label}</h2>
              </Link>
            )
          })}
        </div>
      </div>

      <div className='flex flex-col gap-8 p-3 mt-24'>
        <div className='flex flex-row gap-2 items-center'>
          <Image
            src="/icons/logout.png"
            alt="logout"
            width={24}
            height={24}
          />
          <h2 className='text-base font-semibold text-[#DC0000]'>Log out</h2>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Image
            src="/icons/help.png"
            alt="help"
            width={24}
            height={24}
          />
          <h2 className='text-base font-semibold'>Help</h2>
        </div>
      </div>
    </section>
  )
};

export default LeftSideBar;