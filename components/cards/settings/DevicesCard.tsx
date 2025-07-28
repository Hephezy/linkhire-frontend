import { Separator } from '@/components/ui/separator'
import Image from 'next/image';

const DevicesCard = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center flex-col gap-2'>
          <Image
            src="/icons/desktop-mobile.png"
            alt="devices"
            width={72}
            height={72}
          />
          <h2 className='font-bold text-2xl'>Devices</h2>
        </div>
        <div className='flex flex-col gap-1.5 px-2'>
          <h2 className='font-medium text-xl'>This device</h2>
          <div className='flex flex-row gap-1.5 items-center'>
            <Image
              src="/icons/laptop.png"
              alt='laptop'
              width={24}
              height={24}
            />
            <h2 className='font-semibold text-lg'>MacBook</h2>
          </div>
        </div>
      </div>
      <Separator className='bg-[#ededed] w-[90%] justify-center' orientation="horizontal" />
      <div className='justify-center flex flex-row gap-1.5'>
        <Image
          src="/icons/hand.png"
          alt="hand"
          width={24}
          height={24}
        />
        <h2 className='text-[#dc0000] font-semibold text-lg'>Terminate All Other Sessions</h2>
      </div>
      <Separator className='bg-[#ededed] w-[90%] justify-center' orientation="horizontal" />
      <div className='flex flex-col gap-1.5 px-2'>
        <h2 className='font-medium text-xl'>Active devices</h2>
        <div className='flex flex-row gap-1.5 justify-between'>
          <div className='flex flex-row gap-2'>
            <div>
              <Image
                src="/icons/chromecast.png"
                alt='cast'
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='font-semibold text-lg'>Chrome 134</h2>
              <h2 className='font-semibold text-lg'>Web 10.9.44A</h2>
              <p className='font-medium text-sm'>Hillsboro, United States.Tue</p>
            </div>
          </div>

          <div>
            <Image
              src="/icons/close.png"
              alt='close'
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesCard;