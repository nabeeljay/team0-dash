import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../componentsUtils/Title.js';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '12 Sept, 2020',
    'NETFLIX ENTERTAINMENT',
    'New Delhi, DL',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '12 Sept, 2020',
    'Baskin BR Robins',
    'Noida, UP',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(
    2,
    '11 Sept, 2020',
    'IFFCO TOKIO',
    'New Delhi, DL',
    'MC ⠀•••• 1253',
    1000.81,
  ),
  createData(
    3,
    '11 Sept, 2020',
    'Souled Store',
    'Hyderabad, TS',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '10 Sept, 2020',
    'HP Filling Station',
    'New Delhi, DL',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function Orders() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Merchant name</TableCell>
            <TableCell>Transaction location</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`₹${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
