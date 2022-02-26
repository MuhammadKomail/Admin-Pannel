import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from '@mui/material';
import { Outlet } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;


function AdminPanel(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let navigate = useNavigate();

  const navigateT0DashBoard = () => {
    navigate("")
  }
  const navigateToVieworder = () => {
    navigate("ViewOrders")
  }
  const navigateToViewproducts = () => {
    navigate("ViewProducts")
  }
  const navigateToViewusers = () => {
    navigate("ViewUsers")
  }
  const navigateTUpload = () => {
    navigate("Upload")
  }

  const navigateToRegister = () => {
    navigate("/")
  }
  // ==================================================
  React.useEffect(() => {
    const token = localStorage.getItem('AdminToken')
    const id = localStorage.getItem('AdminId')
    if (token && id) {
    } else {
      navigate('/')
    }
  }, [])
  // ==================================================
  function logOut() {
    const token = localStorage.getItem('AdminToken')
    const id = localStorage.getItem('AdminId')
    if (token && id) {
      localStorage.removeItem('AdminToken')
      localStorage.removeItem('AdminId')
      navigate('/')
    } else {
      navigate('/')
    }
  }

    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <Button onClick={navigateT0DashBoard} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>Dashboard</Typography>

        </Button>
        <Divider />
        <Button onClick={navigateToVieworder} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>View Orders</Typography>
        </Button>
        <Divider />
        <Button onClick={navigateToViewusers} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>View Users</Typography>

        </Button>
        <Divider />

        <Button onClick={navigateToViewproducts} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>View Products</Typography>

        </Button>
        <Divider />

        <Button onClick={navigateTUpload} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>Upload Product</Typography>

        </Button>
        <Divider />

        <Button onClick={navigateToRegister} style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} onClick={logOut} fullWidth>
          <ArrowRightIcon fontSize='large' /><Typography>Logout</Typography>

        </Button>
        <Divider />


      </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ background: "black" }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" style={{ flex: 1 }}>
              MY ACCOUNT
            </Typography>

            <Button style={{ color: "white" }}
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon fontSize="large" />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={navigateToRegister}>Logout</MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
  }

  AdminPanel.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  export default AdminPanel;
