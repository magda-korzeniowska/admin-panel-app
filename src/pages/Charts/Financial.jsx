import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  DateTime,
  Tooltip,
  Crosshair
} from '@syncfusion/ej2-react-charts';

import { ChartHeader } from '../../components';

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartHeader category='Financial' title='AAPL Historical' />
      <div className='w-full'>
        <ChartComponent
          id='financial-chart'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0.5 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[HiloSeries, DateTime, Tooltip, Crosshair]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
