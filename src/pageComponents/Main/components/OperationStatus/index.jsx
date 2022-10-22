import styled from '@emotion/styled';
import CircleChart from '@/components/PieChart';
import { CircleChartWrapper } from '../../styled';
import { Typography } from '@mui/material';
import { colors } from '@/styles/colors';

const data = [
  { name: 'Bubble Tea Sold', value: 10 },
  { name: 'Bubble Tea Left', value: 4 }
];

const data2 = [
  { name: 'Bubble Tea Sold', value: 20 },
  { name: 'Bubble Tea Left', value: 2 }
];

const data3 = [
  { name: 'Bubble Tea Sold', value: 30 },
  { name: 'Bubble Tea Left', value: 10 }
];

const OperationStatus = () => {
  return (
    <Wrapper>
      <Typography variant="h2">Operation Status</Typography>
      <CircleChartWrapper>
        <CircleChart data={data} color={colors.green200} label="Running" />
        <CircleChart data={data2} color={colors.gray800} label="Stop" />
        <CircleChart data={data3} color={colors.red100} label="Abanded" />
      </CircleChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default OperationStatus;
