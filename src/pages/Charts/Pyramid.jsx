import React from 'react';

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { ChartHeader } from '../../components';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartHeader category='Pyramid' title='Food Comparison' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              gapRatio={0.05}
              width='50%'
              height='80%'
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
