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

export default rows
