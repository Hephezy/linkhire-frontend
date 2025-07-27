import { demoNewJobsCard } from '@/constants';
import React from 'react';
import JobCard from '../cards/JobCard';

const NewJobs = () => {
  return (
    <div className='w-full flex flex-col gap-3 mt-16'>
      <div className='flex flex-col gap-3 text-center'>
        <h1 className='text-3xl font-bold'>Newest Jobs For You</h1>
        <h3 className='text-md font-medium'>Get the fastest application so that your name is above other</h3>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-6'>
        {demoNewJobsCard.map((item, index) => (
          <JobCard
            key={index}
            image={item.image}
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            tags={item.tags}
            location={item.location}
            amount={item.amount}
            uploadedAt={item.uploadedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default NewJobs;