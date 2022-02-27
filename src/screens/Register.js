import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
  };

  let navigate = useNavigate();

  const navigateToAdminPanel = () => {
    navigate("/AdminPanel")
  }
  const [checkuser, setCheckuser] = React.useState({
    email: '',
    password: ''
  })

  function setEmailAddress(evt) {
    const value = evt.target.value;
    setCheckuser({
      ...checkuser,
      email: value
    });
  }

  function setPassword(evt) {
    const value = evt.target.value;
    setCheckuser({
      ...checkuser,
      password: value
    });
  }

  const [error, setError] = React.useState()

  // async function registerUser(event) {
  //   const response = await fetch('http://localhost:5000/admin/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(checkuser),
  //   })

  //   const data = await response.json()
  //   console.log(data)
  //   if (data.status === 'ok') {
  //     // navigate('/AdminPanel')
  //     setError("SuccessFull")
  //   }
  // }

  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('https://surkhab.herokuapp.com/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkuser),
    })
    const data = await response.json()
    if (data.user) {
      localStorage.setItem('AdminToken', data.user)
      localStorage.setItem('AdminId', data.id)
      console.log('Login successful')
      navigate("/AdminPanel");
    } else {
      setError('Please check your username and password')
    }
  }

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="p" variant="p" sx={{ color: "red" }}>
            {error}
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={setEmailAddress}
              value={checkuser.email}
              autoComplete="email" />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={setPassword}
              value={checkuser.password}
              autoComplete="current-password"
            />
            <Button
              onClick={loginUser}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>


            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}