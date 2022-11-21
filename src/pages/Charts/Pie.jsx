import React from 'react';

import { ChartHeader,  Doughnut } from '../../components';

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartHeader category='Pie' title='Project Cost Breakdown' />
      <div className='w-full'>
        <Doughnut />
      </div>
    </div>
  );
};

export default Pie;
