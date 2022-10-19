import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts';

const CircleChart = ({ data, color }) => {
  return (
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
  );
};

export default CircleChart;
