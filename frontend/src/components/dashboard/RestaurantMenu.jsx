import React from 'react'
import {Card , Table , Button} from 'antd'
import dishes from '../../assets/dishes.json'
import {Link} from 'react-router-dom'
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;


const RestaurantMenu = () => {
    const tableColumns = [
        {
            title : "Menu Item",
            dataIndex : "name",
            key : "name"
        },
        {
            title : "Price",
            dataIndex : "price",
            key : "price",
            render : (price) => `₹${price}`
        },
        {
            title : "Action",
            key : "action",
            render : () => <Button danger>Remove</Button>
        },
    ];

    const renderNewItemButton = () => (
      <Link to={"create"}>
        <Button type="primary">New Item</Button>
      </Link>
    );

    

  return (

    //------
    // <Layout>
    //   <Sider style={{ height: "100vh", backgroundColor: "white" }}>
    //     <Image
    //       src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
    //       preview={false}
    //     />
    //     <SideMenu/>
    //   </Sider>
    //   <Layout>
    //     <Content>
    //     <Card title={'Menu'} style = {{margin:20}} extra={renderNewItemButton()}>
    //     <Table dataSource={dishes} columns ={tableColumns} rowKey = "id" />
    // </Card>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Uber Eats Restaurant Dashboard ©2022
    //     </Footer>
    //   </Layout>
    // </Layout>

    //--------
    <Card title={'Menu'} style = {{margin:20}} extra={renderNewItemButton()}>
    <Table dataSource={dishes} columns ={tableColumns} rowKey = "id" />
</Card>
   
  )
}

export default RestaurantMenu