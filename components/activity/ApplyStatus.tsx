"use client";

import React, { useState } from 'react';
import { ApplicationStatus } from '@/constants';

const ApplyStatus = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className='flex flex-col w-full gap-6'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row gap-2'>
          {ApplicationStatus.map((item) => (
            <div
              key={item.value}
              onClick={() => setActiveFilter(item.value)}
              className={`
            text-xs px-4 py-1 rounded-full border cursor-pointer
            ${activeFilter === item.value
                  ? "bg-[color:var(--main)] text-white border-[color:var(--main)]"
                  : "bg-white text-gray-700 border-gray-200"
                }`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div>
          Filter
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ApplyStatus;