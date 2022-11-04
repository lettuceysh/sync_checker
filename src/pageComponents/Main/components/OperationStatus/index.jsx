import styled from '@emotion/styled';
import CircleChart from '@/components/PieChart';
import { ItemWrapper } from '../../styled';
import { Typography } from '@mui/material';
import { colors } from '@/styles/colors';
import { useEffect, useState } from 'react';

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

const OperationStatus = ({ jobStatus }) => {
  const [state, setState] = useState({
    stopNum: 0,
    runningNum: 0,
    abandedNum: 0,
    totalNum: 0,
    syncNum: 0,
    outOfSyncNum: 0,
    totalSyncNum: 0
  });

  useEffect(() => {
    if (!jobStatus) {
      return;
    }
    let stopNum = 0;
    let runningNum = 0;
    let abandedNum = 0;
    let syncNum = 0;
    let outOfSyncNum = 0;
    jobStatus.forEach((item) => {
      if (item.status === 1) {
        stopNum++;
      } else if (item.status === 2) {
        runningNum++;
      } else if (item.status === 3) {
        abandedNum++;
      }

      if (item.outofsync_count === 0) {
        syncNum++;
      } else {
        outOfSyncNum++;
      }
    });

    setState({
      stopNum,
      runningNum,
      abandedNum,
      syncNum,
      outOfSyncNum,
      totalNum: stopNum + runningNum + abandedNum,
      totalSyncNum: syncNum + outOfSyncNum
    });
  }, [jobStatus]);
  return (
    <ItemWrapper style={customStyle}>
      <StatusWrapper>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Operation Status
        </Typography>
        <CircleChartWrapper>
          <CircleChart
            data={[{ value: state?.runningNum }, { value: state?.totalNum - state?.runningNum }]}
            color={colors.green200}
            label="Running"
          />
          <CircleChart
            data={[{ value: state?.stopNum }, { value: state?.totalNum - state?.stopNum }]}
            color={colors.gray800}
            label="Stop"
          />
          <CircleChart
            data={[{ value: state?.abandedNum }, { value: state?.totalNum - state?.abandedNum }]}
            color={colors.red100}
            label="Abanded"
          />
        </CircleChartWrapper>
      </StatusWrapper>
      <StatusWrapper>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Synchronization Status
        </Typography>
        <CircleChartWrapper>
          <CircleChart
            data={[{ value: state?.syncNum }, { value: state?.outOfSyncNum }]}
            color={colors.blue100}
            label="sync"
          />
          <CircleChart
            data={[{ value: state?.outOfSyncNum }, { value: state?.syncNum }]}
            color={colors.red100}
            label="out-of-sync"
          />
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
    min-width: 110px;
  }
`;

export default OperationStatus;
