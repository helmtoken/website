import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [{ title: 'App', href: 'https://app.helmtoken.com/' }];
const settings = ['Introduction', 'Helm vs. Bitcoin', 'Documentation', 'Media kit', 'Twitter', 'Telegram', 'Source code'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} color="inherit" position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid alignItems="center" alignContent="center" justifyContent="space-between" sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} container>
            <Grid item>
              <Grid alignItems="center" alignContent="center" container>
                <Grid item>
                  <Avatar sx={{ mr: 2 }} src="/logo.png"></Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="inherit" noWrap sx={{
                    fontWeight: 700,
                  }}>
                    Helm
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {pages.map((page) => (
              <Button href={page.href} key={page.title}>
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                href={page.href}
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ backgroundColor: 'inherit', color: 'initial' }}>
                  <MenuIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;