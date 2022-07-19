import BarChartContainer from './BarChart';
import AreaChartContainer from './AreaChart';
import { useAppContext } from '@context/appContext';
import Wrapper from '@assets/wrappers/ChartsContainer';
import { useState } from 'react';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
      {barChart ? (
        <BarChartContainer data={data} />
      ) : (
        <AreaChartContainer data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
