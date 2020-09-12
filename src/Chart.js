import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  AreaChart, Area, Tooltip,
} from 'recharts';
import Title from './Title';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

const data = [
  {
    name: 'March', credit: 4000, debit: 2400, amt: 2400,
  },
  {
    name: 'April', credit: 3000, debit: 1398, amt: 2210,
  },
  {
    name: 'May', credit: 2000, debit: 9800, amt: 2290,
  },
  {
    name: 'June', credit: 2780, debit: 3908, amt: 2000,
  },
  {
    name: 'July', credit: 1890, debit: 4800, amt: 2181,
  },
  {
    name: 'Aug', credit: 2390, debit: 3800, amt: 2500,
  },
  {
    name: 'Sep', credit: 3490, debit: 4300, amt: 2100,
  },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Hi <b>Nabeel</b>, here is your last 6 Month Summary</Title>
      <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 16, right: 16, left: 16, bottom: 0,
        }}
        >
        <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          <Label
            angle={270}
            position="left"
            style={{
              textAnchor: 'middle',
              fill: theme.palette.text.primary,
            }}
          >
            Spends (₹)
          </Label>
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey="credit" stackId="0" fillOpacity={0.5} stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="debit" stackId="1" stroke="#82ca9d" fillOpacity={0.5} fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>

    
  );
}
