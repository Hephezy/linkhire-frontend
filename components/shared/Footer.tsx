import { LocateIcon, Map, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full'>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='border-1 w-full bg-black my-6' />
        <div className='flex w-full py-3 px-9'>
          <div className='flex flex-row w-full items-center space-x-4 justify-between'>
            <div className='flex flex-col gap-3 w-1/4 mr-12'>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={110}
                height={30}
              />
              <h2>
                LinkHire is a smart job search and recruitment platform that connects job seekers with employers. With fast search, professional resume building, and intelligent matching, LinkHire makes hiring and job hunting easy and efficient.
              </h2>
            </div>
            <div className='flex w-1/4 flex-col gap-3 justify-center ml-24'>
              <h2>Our Services</h2>

              <div className='mt-3'>
                <h3>Find Job</h3>
                <h3>Create Resume</h3>
                <h3>Search Company</h3>
                <h3>Pricing Plan</h3>
              </div>
            </div>
            <div className='flex w-1/4 flex-col gap-3 justify-center'>
              <h2>Links</h2>

              <div className='mt-3'>
                <h3>Blog</h3>
                <h3>Help Center</h3>
                <h3>Contact Us</h3>
                <h3>Privacy Policy</h3>
                <h3>About Us</h3>
              </div>
            </div>
            <div className='flex w-1/4 flex-col gap-3'>
              <h2>Contact Us</h2>
              <div className='flex flex-row gap-2'>
                <div className='p-3 rounded-full items-center justify-center bg-[#F4F4F4]'>
                  <Image
                    src="/icons/instagram.png"
                    alt='instagram'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='p-3 rounded-full items-center justify-center bg-[#F4F4F4]'>
                  <Image
                    src="/icons/facebook.png"
                    alt='instagram'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='p-3 rounded-full items-center justify-center bg-[#F4F4F4]'>
                  <Image
                    src="/icons/whatsapp.png"
                    alt='instagram'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='p-3 rounded-full items-center justify-center bg-[#F4F4F4]'>
                  <Image
                    src="/icons/linkedin.png"
                    alt='instagram'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='p-3 rounded-full items-center justify-center bg-[#F4F4F4]'>
                  <Image
                    src="/icons/social_x.png"
                    alt='instagram'
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <LocateIcon />
                <h2>1500 Marilla St, Dallas, TX 75201</h2>
              </div>
              <div className='flex flex-row gap-2'>
                <Phone />
                <h2>1(000)000-0000</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#EDEDED] flex w-full py-3 px-9'>
          <div className='flex flex-row w-full items-center justify-between'>
            <h2 className='font-semibold text-xl'>LinkHire Copyright 2025</h2>

            <div className='flex flex-row items-center justify-center space-x-6'>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/visa-logo.png"
                  alt='instagram'
                  width={24}
                  height={24}
                />
              </div>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/Stripe.png"
                  alt='instagram'
                  width={24}
                  height={24}
                />
              </div>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/PayPal.png"
                  alt='instagram'
                  width={25}
                  height={21}
                />
              </div>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/GooglePay.png"
                  alt='instagram'
                  width={24}
                  height={24}
                />
              </div>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/DinersClub.png"
                  alt='instagram'
                  width={20}
                  height={15}
                />
              </div>
              <div className='bg-white py-2 px-4'>
                <Image
                  src="/icons/ApplePay.png"
                  alt='instagram'
                  width={24}
                  height={24}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;