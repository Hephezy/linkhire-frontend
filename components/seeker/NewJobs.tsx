import React from 'react';

const NewJobs = () => {
  return (
    <div className='w-full flex flex-col gap-3 mt-16'>
      <div className='flex flex-col gap-3 text-center'>
        <h1 className='text-3xl font-bold'>Newest Jobs For You</h1>
        <h3 className='text-md font-medium'>Get the fastest application so that your name is above other</h3>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-6'>
        {/* {demoCategoryCard.map((item) => (
          <CategoryCards
            key={item.title}
            image={item.image}
            title={item.title}
            achievement={item.achievement}
          />
        ))} */}
      </div>
    </div>
  );
};

export default NewJobs;