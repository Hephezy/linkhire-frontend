import { stepJobCard } from '@/constants';
import React from 'react';
import StepCard from '../cards/StepCard';

const Steps = () => {
  return (
    <div className='w-full flex flex-col gap-3 mt-16'>
      <div className='flex flex-col gap-3 text-center'>
        <h1 className='text-3xl font-bold'>Steps to Your Dream Job</h1>
        <h3 className='text-md font-medium'>Get a step closer to that dream job </h3>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-6'>
        {stepJobCard.map((item, index) => (
          <StepCard
            key={index}
            number={index + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;