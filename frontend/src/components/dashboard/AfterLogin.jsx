import DetailedOrder from "./DetailedOrder";
import Orders from "./Orders";
import RestaurantMenu from "./RestaurantMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, Image } from "antd";
import SideMenu from '../dashboard/SideMenu'
import CreateMenuItem from "./CreateMenuItem";
import OrderHistory from "./OrderHistory";

import Settings from "./Settings";
import Register from "../Register/register";
import Login from "../Login/login";



const { Sider, Content, Footer } = Layout;

function AfterLogin() {

  const user = localStorage.getItem("token");
  console.log(user)

  return (

    <>

    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Login />} />
      
        {/* <Routes path="" element={<Navigate replace to="/login" />} /> */}
      {/* <Route path="/" element={<Login />} /> */}
    

      </Routes>
   {user &&  <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <Routes>

            <Route path="/orders" element={<Orders />} />
            <Route path="orders/:id" element={<DetailedOrder />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
             <Route path="order-history" element={<OrderHistory />} />
             <Route path="settings" element={<Settings />} />

          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Uber Eats Restaurant Dashboard ©2022
        </Footer>
      </Layout>
    </Layout>}
    </>
    
  );
}

export default AfterLogin;
