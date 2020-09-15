import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Radio,RadioGroup } from '@material-ui/core';
import './Profile.css';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '150%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Additional Profile Data
        </Typography>
        <Typography component="p" variant="p" align="center">
          This data helps us to know you better and suggest you better means of managing your money
        </Typography>
      
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} md={4}>
                <span>Gender</span>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Male"
                    // labelPlacement="top"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Female"
                    // labelPlacement="start"
                    />
                </RadioGroup>
            </Grid>

            <Grid item xs={12} md={4}>
                <span>Married?</span>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Yes"
                    // labelPlacement="top"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="No"
                    // labelPlacement="start"
                    />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} md={4}>
                <span>Residence</span>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Rural"
                    // labelPlacement="top"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Urban"
                    // labelPlacement="start"
                    />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Age"
                name="Age"
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Gross Household Income"
                name="Gross Household Income"
                autoComplete=""
              />
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Current Holdings"
                name=""
                autoComplete=""
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
            
          </Grid>
          
          <Button
            type="submit"
            width="100%"
            variant="contained"
            color="primary"
            align="center"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>

    </Container>
  );
}
