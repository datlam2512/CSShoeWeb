import {useRef} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Login/Context/AuthContext';

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

import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';

export default function Header() {
  const {user, logOut} = UserAuth();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = async ()=>{
  try {
    await logOut()
    } catch (error) {
    console.log(error);
    }
  }

  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  }

  const previous = () => {
    carouselRef.current.prev();
  }
  const contentStyle = {
    height: '500px',
    background: '#364d79',
  };

  return (
    <div className='Header'>
      <div>
      {user?.displayName?(
                <div>
                <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.email} src={user.photoURL} />
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
               <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" ><Link to='/dashboard' style={{textDecoration:"none"}}>Dashboard</Link></Typography>
                </MenuItem>
                <MenuItem>
                <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                </MenuItem>
            </Menu>
                </div>
              ):(
                <Link to='/login' style={{textDecoration:"none"}} >
                  <Button 
                sx={{ my: 2,  color: 'white', display: 'block' }} 
                >
                  Sign in
                  </Button>
                  </Link>
               )}

      </div>
      <Button className="butt-1" type="ghost" icon={<LeftOutlined />} onClick={previous} />
      <Carousel autoplay autoplaySpeed={2000} ref={carouselRef}>
        <div className='banner'>
          <img src='/Img/banner.png' style={contentStyle}/>
        </div>
        <div className='banner'>
          <img src='/Img/slider5.jpg' style={contentStyle}/>
        </div>
        <div className='banner'>
          <img src='/Img/slider6.jpg' style={contentStyle}/>
        </div>
        <div className='banner'>
          <img src='/Img/banner4.webp' style={contentStyle}/>
        </div>
      </Carousel>
      <Button className="butt-2" type="ghost" icon={<RightOutlined />} onClick={next} />
    </div>
  )
}
