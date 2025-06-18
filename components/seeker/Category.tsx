import { demoCategoryCard } from '@/constants'
import React from 'react'
import CategoryCards from '../cards/CategoryCard'

const Category = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='flex flex-col gap-3 text-center'>
        <h1 className='text-3xl font-bold'>Popular Category</h1>
        <h3 className='text-md font-medium'>The lasts jobs offer uploaded</h3>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-6'>
        {demoCategoryCard.map((item) => (
          <CategoryCards
            key={item.title}
            image={item.image}
            title={item.title}
            achievement={item.achievement}
          />
        ))}
      </div>
    </div>
  )
}

export default Category