import React from 'react'
import {Menu , Button} from 'antd'
import { Navigate, Routes, useNavigate } from 'react-router-dom'
import '../../../src/index.css';


const SideMenu = () => {
  const navigate = useNavigate();
    const menuItems = [
        {
            key : 'orders',
            label : 'Orders'
        },
        {
            key : 'menu',
            label : 'Menu'
        },
        {
            key : 'order-history',
            label : 'Order History'
        },
        {
            key : 'settings',
            label : 'Settings'
        }
    ] ;

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/")
      window.location.reload();

    };

   
  return (
    <>
    <Menu items={menuItems} onClick ={(menuItem) => navigate(menuItem.key)} />
    <Button style={{position: 'relative', left: '10px', top: '1rem'}}   type='danger'  onClick={handleLogout}>
					Logout
				</Button>
    </>
  )
}

export default SideMenu