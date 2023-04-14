import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';
import Connect from '../components/Connect';

export default function MainAppBar() {
  return (
    <AppBar color="inherit" elevation={0} position="relative">
      <Toolbar>
        <Grid alignItems="center" alignContent="center" justifyContent="space-between" container>
          <Grid item>
            <Grid alignItems="center" alignContent="center" container>
              <Grid item>
                <Link underline="none" href="/">
                  <Avatar sx={{ mr: 2 }} src="/logo.png"></Avatar>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="inherit" noWrap>
                  Helm
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button href="https://app.helmtoken.com">
              App
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}