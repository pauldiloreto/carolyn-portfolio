import React, { ReactElement, useState } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { white, primary, secondary } from '../Layout/theme';

const useStyles = makeStyles(theme => ({
  modal: {
    backgroundColor: primary,
    color: white,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3.5rem 0',
  },
  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25rem',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  password: {
    backgroundColor: white,
  },
  backButton: {
    display: 'flex',
    justifyContent: 'space-between',
    color: secondary,
    width: '8rem',
  },
  submitButton: {
    margin: '1rem 0',
    width: '15rem',
  },
}));

interface PasswordProps {
  password: string;
  onSuccess: () => void;
}

const PasswordPrompt = (props: PasswordProps): ReactElement => {
  const { password, onSuccess } = props;
  const [passwordInput, setPasswordInput] = useState('');
  const [showError, setShowError] = useState(false);
  const classes = useStyles();

  const submitPassword = (event: any) => {
    event.preventDefault();
    if (passwordInput === password) {
      onSuccess();
    } else {
      setShowError(true);
    }
  };

  return (
    <Dialog maxWidth="md" fullWidth open classes={{ paper: classes.modal }}>
      <DialogContent>
        <Link className={classes.backButton} to="/projects">
          <ArrowBack />
          Go Back
        </Link>

        <section className={classes.content}>
          <Typography align="center" variant="h4">
            Password Protected
          </Typography>
          <Typography align="center" variant="h6">
            Please enter a password to continue.
          </Typography>
          <form onSubmit={submitPassword} className={classes.form}>
            <TextField
              fullWidth
              InputProps={{ classes: { root: classes.password } }}
              type="password"
              variant="outlined"
              color="secondary"
              onChange={event => setPasswordInput(event.target.value)}
              value={passwordInput}
              error={showError}
              helperText={showError && 'The password you entered is incorrect.'}
            />
            <Button type="submit" className={classes.submitButton} color="secondary" variant="outlined">
              Enter
            </Button>
          </form>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordPrompt;
