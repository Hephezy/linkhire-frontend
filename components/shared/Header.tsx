"use client";

import React from 'react'
import Seeker from './Header/Seeker';
import Employer from './Header/Employer';
import { useUserType } from '@/hooks/useUserType';

const Header = () => {
  const userType = useUserType();
  const header = userType === "employer" ? <Employer /> : <Seeker />;

  return (
    <section className='flex w-[95%] flex-row justify-between items-center pb-3 rounded-xl mt-4'>
      <div className='flex w-full'>
        {header}
      </div>
    </section>
  )
}

export default Header;