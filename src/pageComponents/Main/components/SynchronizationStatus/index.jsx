import styled from '@emotion/styled';
import CircleChart from '@/components/PieChart';
import { CircleChartWrapper } from '../../styled';
import { Typography } from '@mui/material';

const data = [
  { name: 'Bubble Tea Sold', value: 10 },
  { name: 'Bubble Tea Left', value: 4 }
];

const data2 = [
  { name: 'Bubble Tea Sold', value: 20 },
  { name: 'Bubble Tea Left', value: 25 }
];

const SynchronizationStatus = () => {
  return (
    <Wrapper>
      <Typography variant="h2">Synchronization Status</Typography>
      <CircleChartWrapper>
        <CircleChart data={data} color="blue" label="sync" />
        <CircleChart data={data2} color="orange" label="out-of-sync" />
      </CircleChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SynchronizationStatus;
