import React from 'react';
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts';

const CircleChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <PieChart width={730} height={250}>
        <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={60} outerRadius={80}>
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
            }
            return <Cell key={`cell-${index}`} fill="green" />;
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
  );
};

export default CircleChart;
