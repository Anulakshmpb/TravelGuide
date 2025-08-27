// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from '../Config/Config';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
// import { rgbToHex } from '@mui/material/styles';
// import './AppBar.css'
 

// export default function TopBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [uid,setUid] = useState(null);
//    const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const settings = ['Profile', 'Account','Logout'];

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//     const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
//     const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   useEffect(()=>{
//     onAuthStateChanged(auth,(user)=>{
//       if(user){
//         setUid(user.uid)
//       } else {
//         setUid(null)
//       }
//     })
//   },[auth]);
//    const navigate = useNavigate(); 
//     const handleLogout =()=>{
//             signOut(auth).then(() => {
//                 window.location.reload();
//                 }).catch((error) => {
//                     console.error(error);
//                     });
//         };

//    const handleContactUs = () => {
//         navigate('/contact'); 
//     };
//      const handleProfile = () => {
//         navigate('/profile'); 
//     };
//      const handleMenuClose = () => {
//     setAnchorEl(null);
    
//   };
//     <menu>
//     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
// </menu>

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static"style={{backgroundColor:'rgba(47, 115, 210, 1)'}} >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="black"
//             aria-label="menu"
//             sx={{ mr: 2 }}
            
//           >
//             <MenuIcon />
//           </IconButton>
//            <Typography
//                       variant="h5"
//                       noWrap
//                       component="div"
//                       sx={{ display: { xs: 'none', sm: 'block' } }}
//                       color='black'
//                     >
//                       TravelGuide
//             </Typography>
            
//           <Button></Button>
//           <Button onClick={()=>{navigate("/hotels")
//           }} color='white'>Hotels</Button>
//           <Button onClick={()=>{navigate("/rest")
//           }} color='white'>Restaurants</Button>
//           <Button onClick={()=>{navigate("/")
//           }}color='white'>Destination</Button>
//           <Button onClick={()=>{navigate("/review")
//           }}color='white'>Review</Button>
//           <Button onClick={()=>{navigate("/weather")
//           }}color='white'>Weather</Button>
//           <Button onClick={()=>{navigate("/contact")
//           }}color='white'>Contact Us</Button>
//           <Button  onClick={()=>{navigate("/aboutus")
//           }}color='white'>About Us</Button>
//           {uid?
//           <Button onClick={handleLogout}>LogOut</Button>:<Button onClick={()=>{
//             navigate("/login")
//           }}color='white'>Login</Button>
//           }

          
            
//           <Box sx={{ flexGrow: 1 }} />
//           {uid&&
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
       
//             <IconButton size="large" aria-label="show 4 new mails" color="blue">
//               <Badge badgeContent={4} color="blue">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="blue"
//             >
//               <Badge badgeContent={17} color="blue">
//                 <NotificationsIcon />
//               </Badge>
//              </IconButton>
           
//               {/* <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               // aria-controls={menuId}
//               aria-haspopup="true"
//               // onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton> */}
//              <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
            
              
//                 </Box>
//                 }
//            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            
//           </Box>
        
        
//         </Toolbar>
//       </AppBar>
//     </Box>
    
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'About us', path: '/aboutus' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Restaurants', path: '/rest' },
  { name: 'Destinations', path: '/' },
  { name: 'Reviews', path: '/review' },
  { name: 'Contact', path: '/contact' },
  { name: 'Weather', path: '/weather' },
];
const settings = ['Profile', 'Account', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path = null) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TravelGuide
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TravelGuide
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
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


