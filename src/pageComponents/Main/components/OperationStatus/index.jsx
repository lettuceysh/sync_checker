import styled from '@emotion/styled';
import CircleChart from '@/components/PieChart';
import { ItemWrapper } from '../../styled';
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
    <ItemWrapper style={customStyle}>
      <StatusWrapper>
        <Typography variant="h2">Operation Status</Typography>
        <CircleChartWrapper>
          <CircleChart data={data} color={colors.green200} label="Running" />
          <CircleChart data={data2} color={colors.gray800} label="Stop" />
          <CircleChart data={data3} color={colors.red100} label="Abanded" />
        </CircleChartWrapper>
      </StatusWrapper>
      <StatusWrapper>
        <Typography variant="h2">Synchronization Status</Typography>
        <CircleChartWrapper>
          <CircleChart data={data} color={colors.blue100} label="sync" />
          <CircleChart data={data2} color={colors.red100} label="out-of-sync" />
        </CircleChartWrapper>
      </StatusWrapper>
    </ItemWrapper>
  );
};

const customStyle = {
  width: '600px',
  display: 'flex'
};

const StatusWrapper = styled.div`
  flex: 1;
  & + * {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid ${colors.gray200};
  }
`;

const CircleChartWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  border-radius: 2px;
  width: 100%;
  height: 120px;
  > div {
    min-width: 100px;
  }
`;

export default OperationStatus;
