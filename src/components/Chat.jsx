import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='fixed top-0 right-0 bg-half-transparent w-full nav-item flex items-center justify-center h-screen '>
      <div className='bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Messages</p>
          <Button
            color='rgb(153, 171, 180)'
            icon={<MdOutlineCancel />}
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>
        {chatData.map((item, index) => (
          <div
            key={`chatData-${index}`}
            className='flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'
          >
            <img src={item.image} alt='' className='rounded-full h-14 w-14' />
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                {item.desc}
              </p>
              <p className='text-gray-500 dark:text-gray-400 text-xs'>
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button
            color='white'
            bgColor={currentColor}
            text='See All Messages'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
