import React from 'react';

const Header = ({ category, title }) => {
  return (
    <div className='mb-10'>
      <p className='text-lg text-gray-400'>Chart</p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
        {category}
      </p>
      <p className='text-center dark:text-gray-200 text-xl mb-2 mt-3'>
        {title}
      </p>
    </div>
  );
};

export default Header;
