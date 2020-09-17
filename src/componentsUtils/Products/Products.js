import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from './theme.js'


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


// const cards = [1, 2, 3, 4, 5, 6];

export default function Products() {
  const classes = theme();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <b></b> Prudence
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
              Our recomendations
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Our machine learning models determine what's the right investment strategy for you. Your Risk tolerance level is considered as a key criteria
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Update Risk Tolerance
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="ELSS.jpeg"
                    title="ELSS Mutual Funds"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                   ELSS Mutual Funds
                    </Typography>
                    <Typography>
                    Equity-Linked Savings Scheme or ELSS is an open-ended equity mutual fund.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  size="small" color="primary">
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="credit_risk_funds.jpeg"
                    title="Credit Risk Funds"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Credit Risk Funds
                    </Typography>
                    <Typography>
                    A debt scheme investing in below highest rated corporate bonds.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/doc" size="small" color="primary">
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="index_funds.jpeg"
                    title="Index Funds"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Index Funds
                    </Typography>
                    <Typography>
                    A mutual fund replicating-tracking any index
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright © '} */}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Made with ♥️ by Team[0]
      </Link>{' '} */}
      <span>Made with <span role="img" aria-label="heart">♥️</span> by Team[0]</span>
      {/* {new Date().getFullYear()}
      {'.'} */}
    </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
