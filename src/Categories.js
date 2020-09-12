import * as React from 'react';
import {
    PieChart, Pie, Cell,ResponsiveContainer, Label,
  } from 'recharts';
import Title from './Title';


  const data = [
    { name: 'Groceries', value: 400 },
    { name: 'Lifestyle', value: 300 },
    { name: 'Fuel', value: 300 },
    { name: 'Misc', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor='middle' dominantBaseline="middle">
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {data[index].name}
      </text>
    );
  };

function Categories() {
    return (
        <React.Fragment>
            <Title>Categories</Title>
            <ResponsiveContainer>
                <PieChart >
                    <Pie
                    data={data}
                    margin={{
                        top: 10, right: 10, left: 10, bottom: 0,
                      }}
                    labelLine={false}
                    // innerRadius={40}
                    outerRadius={80}
                    label={renderCustomizedLabel}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                    <Label nameKey="name" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </React.Fragment>
      
    );
  }

export default Categories

