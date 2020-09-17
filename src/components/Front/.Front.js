import Chart from '../../componentsUtils/ListItems/Chart.js';
import Orders from '../Order/Orders.js';
import Categories from '../../componentsUtils/ListItems/Categories.js';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import React from 'react'
import theme from './theme.js'

const classes = theme();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

function Front() {
    return (
        // const classes = useStyles();
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Spending Categories */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Categories />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    )
}

export default Front
