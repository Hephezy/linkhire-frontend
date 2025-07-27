"use client";

import Image from 'next/image';
import React from 'react';
import { employerNavbar } from '@/constants';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BellIcon, SearchIcon } from 'lucide-react';
import ProfileDropDown from '../ProfileDropDown';

const EmployerNavbar = () => {
  const isSigned = true;

  return (
    <nav className='flex w-[95%] flex-row justify-between items-center bg-white py-3 px-9 rounded-xl mt-4'>
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={110}
          height={30}
        />
      </div>
      <div className='hidden lg:flex gap-12 md:gap-8 items-center'>
        {employerNavbar.map((item) => (
          <Link
            key={item.label}
            href={item.route}
          >
            <h2 className='text-base font-semibold'>
              {item.label}
            </h2>
          </Link>
        ))}
      </div>
      <div className='flex h-5 flex-row items-center gap-6 justify-between'>
        <div className='flex flex-row gap-3'>
          <SearchIcon className='cursor-pointer' />
          <BellIcon className='cursor-pointer' />
          <Link
            href="/"
          >
            <h2 className='text-base font-semibold cursor-pointer'>
              Job Seeker
            </h2>
          </Link>
        </div>
        <Separator className='bg-black w-2' orientation="vertical" />
        <div className='flex'>
          {isSigned
            ? <>
              <ProfileDropDown type='employer' />
            </>
            : <>
              <Button className='bg-[color:var(--main)] hover:bg-[color:var(--auxiliary)]' size="sm">
                Sign Up
              </Button>
            </>
          }
        </div>
      </div>
    </nav>
  );
};

export default EmployerNavbar;