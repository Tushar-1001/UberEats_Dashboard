import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/login";

import Register from "./components/Register/register";
import DetailedOrders from "./components/dashboard/DetailedOrder";
import Settings from "./components/dashboard/Settings";
import OrderHistory from "./components/dashboard/OrderHistory";
import CreateMenuItem from "./components/dashboard/CreateMenuItem";
import RestaurantMenu from "./components/dashboard/RestaurantMenu";
import SideMenu from "./components/dashboard/SideMenu";
import AppRoutes from "./components/dashboard/AppRoutes";
import Orders from "./components/dashboard/Orders";
import DetailedOrder from "./components/dashboard/DetailedOrder";

import AfterLogin from "./components/dashboard/AfterLogin";

import { Layout, Image } from "antd";
const { Sider, Content, Footer } = Layout;

function App() {
  return <AfterLogin />;
}

export default App;
