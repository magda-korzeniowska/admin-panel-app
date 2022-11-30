import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='fixed top-0 right-0 bg-half-transparent w-full nav-item flex items-center justify-center h-screen '>
      <div className='bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>User Profile</p>
          <Button
            color='rgb(153, 171, 180)'
            icon={<MdOutlineCancel />}
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>

        <div className='flex gap-5 items-center'>
        <img src={avatar} alt='' className='rounded-full h-24 w-24' />
          <div>
            <p className='font-semibold  dark:text-gray-200 text-xl'>Dexter Morgan</p>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>
              Administrator
            </p>
            <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold'>
              admin@dashboard.com
            </p>
          </div>
        </div>
        {userProfileData.map((item, index) => (
          <div
            key={`userProfileData-${index}`}
            className='flex gap-5 border-b-1 border-color dark:border-gray-600 p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]'
          >
            <Button 
              bgColor={item.iconBg}
              color={item.iconColor}
              borderRadius='8px'
              size='xl'
              bgHoverColor='bg-light-gray'
              icon={item.icon}
            />
            <div className='flex items-center'>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button
            color='white'
            bgColor={currentColor}
            text='Logout'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
