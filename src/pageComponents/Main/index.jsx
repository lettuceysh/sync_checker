import { Grid, Paper, Typography } from '@mui/material';
import CircleChart from '@/components/PieChart';

import styled from '@emotion/styled';
import OperationManageMentTable from '@/pageComponents/OperationManagement/OperationTable';

const data = [
  { name: 'Bubble Tea Sold', value: 10 },
  { name: 'Bubble Tea Left', value: 4 }
];

const data2 = [
  { name: 'Bubble Tea Sold', value: 20 },
  { name: 'Bubble Tea Left', value: 2 }
];

const Main = () => {
  return (
    <div>
      <Grid>
        <Paper elevation={10}>
          <CircleChartWrapper>
            <CircleChart data={data} />
            <CircleChart data={data2} />
            <CircleChart data={data2} />
          </CircleChartWrapper>
          <Grid></Grid>
        </Paper>
      </Grid>
    </div>
  );
};

const CircleChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  > div {
    min-width: 200px;
  }
`;

export default Main;
