import Image from 'next/image';
import React from 'react';
import { Card } from '../ui/card';

interface Props {
  image: string;
  title: string;
  achievement: string;
};

const CategoryCard = ({ image, title, achievement }: Props) => {
  return (
    <Card className='flex flex-row p-2 items-center gap-6'>
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
    </Card>
  );
};

export default CategoryCard;