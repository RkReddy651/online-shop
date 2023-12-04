import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className="logo">
        <StorefrontOutlinedIcon/>
        <h2>RK Shop</h2>
      </div>
      <div className="search">
        <input type="text" />
        <SearchRoundedIcon/>
      </div>
      <div className="user">
        <div className="customer">
          <h3>customer</h3>
          <h3>Sign up</h3>
          <h2>Your Shop</h2>
        </div>
        <div className='Your_shop'>
          <ShoppingCartIcon/>
          <span>count</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar