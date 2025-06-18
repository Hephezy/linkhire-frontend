import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  title: string;
  achievement: string;
};

const CategoryCards = ({ image, title, achievement }: Props) => {
  return (
    <div className='border flex flex-row p-2 items-center gap-6 border-[#757575]'>
      <div className='p-2 bg-[#F4F4F4]'>
        <Image
          src={image}
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
      <div>
        <h2 className='text-md font-semibold'>{title}</h2>
        <p className='text-sm font-medium'>{achievement} jobs available</p>
      </div>
    </div>
  );
};

export default CategoryCards;