import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

interface Props {
  image: string;
  companyName: string;
  jobTitle: string;
  location: string;
  tags: string[];
  amount: number;
  uploadedAt: number;
};

const JobCard = ({ image, companyName, jobTitle, location, tags, amount, uploadedAt }: Props) => {
  return (
    <Card className='flex w-full p-3 cursor-pointer'>
      <CardContent className='flex flex-row gap-8'>
        <div>
          <Image
            src={image}
            alt="company logo"
            width={64}
            height={64}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex flex-col gap-2'>
            <p className='text-[12px] font-normal text-[#A5A5A5]'>{companyName}</p>
            <h3 className='text-[18px] font-medium text-black'>{jobTitle}</h3>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-3'>
              {tags.map((item, index) => (
                <div key={index} className='p-2 bg-[#EFF5FF] rounded-xl'>
                  <p className='text-[#6C2BD9] text-[12px] font-normal'>{item}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-row gap-2'>
              <p className='text-[#353535] text-[12px] font-normal'>{location}</p>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <p className='text-[#6C2BD9] text-[14px] font-medium'>{amount}$/month</p>
            <p className='text-[#757575] text-[10px] font-normal'>{uploadedAt} hour ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;