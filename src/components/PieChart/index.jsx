import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts';

const CircleChart = ({ data, color, label }) => {
  return (
    <Wrapper>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={25} outerRadius={40}>
            {data.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
              }
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
            <Label
              value={data[0].value}
              position="center"
              fill="grey"
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                fontFamily: 'Roboto'
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Typography variant="normalGreen" sx={{ textAlign: 'center', display: 'block' }}>
        {label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  padding-bottom: 5px;
`;

export default CircleChart;
