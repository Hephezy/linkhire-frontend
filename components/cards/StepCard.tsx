import React from 'react'
import { Card } from '../ui/card';

interface Props {
  number: number;
  title: string;
  description: string;
};

const StepCard = ({ number, title, description }: Props) => {
  return (
    <Card className='p-3 flex flex-col gap-4'>
      <div className='bg-[#EFF5FF] py-3 px-6 rounded-lg w-fit bottom-2'>
        <h2 className='text-[#6C2BD9] text-[20px] font-medium'>{number}</h2>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-black text-[18px] font-semibold'>{title}</h2>
        <p className='text-[#757575] text-[14px] font-normal'>{description}</p>
      </div>
    </Card>
  );
};

export default StepCard;