import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import SHA3 from 'sha3';
import MaskableTextField from './MaskableTextField/MaskableTextField';

/* eslint-disable no-unused-vars */
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
/* eslint-enable no-unused-vars */

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const sha3 = new SHA3(256);
    const { userEmail, password } = this.state;
    /* eslint-disable no-unused-vars */
    const request = {
      email: userEmail,
      password: sha3.update(password).digest('hex'),
    };
    /* eslint-disable no-unused-vars */
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logare
          </Typography>
          <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                onChange={e => this.handleChange(e)}
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <MaskableTextField
                id="password"
                label="Password*"
                name="password"
                value={password}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* TODO: Inspect how to use rememberMe checkbox... */}
              Logare
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
/* eslint-disable react/forbid-prop-types */
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styles)(Login);
