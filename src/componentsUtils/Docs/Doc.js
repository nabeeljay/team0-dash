import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from './theme'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



export default function Doc() {
  const classes = theme();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Credit Risk Funds
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Credit Risk Funds
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Credit Risk Mutual Funds are debt funds which invest in low-credit quality debt securities. These funds have higher risks since they invest in low-quality instruments.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                    <h2>Credit Risk Mutual Funds</h2>
                    <p>Credit risk is one of the primary risks of investing in debt funds. It is the risk of default of the issuer of the security in repaying the principal and/or interest. Credit risk is higher with low-quality securities and therefore most conservative investors prefer mutual funds which invest only in high-credit quality debt securities. However, there is a type of debt fund which invests in low-credit quality securities – Credit Risk Fund. Here, we will explore credit risk funds and talk about everything that you need to know about them before investing.</p>
                </Grid>
                <Grid item>
                    <h2>What is a Credit Risk Mutual Fund?</h2>
                        <p>Credit Risk Mutual Funds are debt funds which invest in low-credit quality debt securities. These funds have higher risks since they invest in low-quality instruments.

                Why would a fund invest in securities with low credit ratings?

                The answer is simple. Securities with a low credit rating tend to offer higher interest rates. Usually, instruments with a credit rating below AA are considered to carry a higher credit risk. The fund managers of Credit Risk Funds also choose securities which might get a boost in rating (as per their analysis). This can have a positive impact on the NAV of the fund.</p>

                </Grid>

                <Grid item>
                <h2>Features of Credit Risk Mutual Funds</h2>
                    <p>Here are some salient features of credit risk mutual funds:</p>
                    <ul>
                    <ui>They are tax-efficient for investors in the highest tax slab since Long Term Capital Gains (LTCG) are taxed at 20% while their tax slab rates are 30%.</ui>
                    <ui>These funds have more liquidity risks.</ui>
                    <ui>The fund manager plays an important role in the performance of the fund. He chooses the low-rated securities to invest in!</ui>
                    </ul>
                </Grid>

                <Grid item>
                <h2>How do Credit Risk Mutual Funds work?</h2>
                <p>Credit Risk Funds invest in debt securities and money market instruments which have a low credit rating since such instruments tend to offer higher interest rates. Also, when the rating of a security is upgraded, the fund benefits. Credit Risk Funds have lower-interest-rate risks and the fund manager ensures that he keeps the average credit quality of the fund within control and the default probability relatively low. Usually, credit risk funds tend to offer 2-3% higher returns than risk-free debt investments.</p>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      End footer */}
    </React.Fragment>
  );
}
