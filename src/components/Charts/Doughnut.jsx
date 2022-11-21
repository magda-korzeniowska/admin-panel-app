import React from 'react';

import {
  Inject,
  AccumulationChartComponent,
  PieSeries,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = () => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent tooltip={{ enable: true }}>
      <Inject
        services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          type='Pie'
          dataSource={pieChartData}
          innerRadius='40%'
          xName='x'
          yName='y'
          dataLabel={{ visible: true, name: 'text' }}
          explode
          explodeOffset='10%'
          explodeIndex={0}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    // <ChartComponent
    //   id='line-chart'
    //   height='420px'
    //   primaryXAxis={LinePrimaryXAxis}
    //   primaryYAxis={LinePrimaryYAxis}
    //   chartArea={{ border: { width: 0 } }}
    //   tooltip={{ enable: true }}
    //   background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    //   legendSettings={{ background: 'white' }}
    // >
    //   <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    //   <SeriesCollectionDirective>
    //     {lineCustomSeries.map((item, index) => (
    //       <SeriesDirective key={index} {...item} />
    //     ))}
    //   </SeriesCollectionDirective>
    // </ChartComponent>
  );
};

export default Doughnut;
