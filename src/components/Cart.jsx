import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div
      className='fixed top-0 right-0 bg-half-transparent w-full nav-item'
      onClick={handleClick}
    >
      <div
        className='h-screen w-400 float-right duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Shopping Cart</p>
          <Button
            color='rgb(153, 171, 180)'
            icon={<MdOutlineCancel />}
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>
        {cartData.map((item, index) => (
          <div
            key={`cartData-${index}`}
            className='flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'
          >
            <img src={item.image} alt='' className='rounded-lg h-80 w-24' />
            <div>
              <p className='font-semibold'>{item.name}</p>
              <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>
                {item.category}
              </p>
              <div className='flex gap-4 mt-2 items-center'>
                <p className='font-semibold text-lg'>{item.price}</p>
                <div className='flex items-center border-1 border-r-0 border-color rounded'>
                  <p className='p-2 border-r-1 dark:border-gray-600 border-color text-red-600 '>
                    <AiOutlineMinus />
                  </p>
                  <p className='p-2 border-r-1 dark:border-gray-600 border-color text-green-600'>
                    0
                  </p>
                  <p className='p-2 border-r-1 dark:border-gray-600 border-color text-green-600'>
                    <AiOutlinePlus />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-200'>Subtotal</p>
            <p className='font-semibold'>$890</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-semibold'>$890</p>
          </div>
        </div>
        <div>
          <Button
            color='white'
            bgColor={currentColor}
            text='Place Order'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
