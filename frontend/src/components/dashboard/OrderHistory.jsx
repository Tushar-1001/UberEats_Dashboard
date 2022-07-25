import React from 'react'
import orderHistory from '../../assets/orders-history.json'
import { Card , Table , Tag  } from 'antd'
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;

const OrderHistory = () => {

    const tableColumns = [
        {
            title : "Order Id",
            dataIndex : 'orderID',
            key : 'orderID'
        },
        {
            title : "Delivery Address",
            dataIndex : 'deliveryAddress',
            key : 'deliveryAddress'
        },
        {
            title : "Price",
            dataIndex : 'price',
            key : 'price',
            render : (price) => `₹${price}`
        },
        {
            title : "Status",
            dataIndex : 'status',
            key : 'status',
            render : (status) => <Tag color={ status === 'Delivered' ? 'green' : 'red'}>{status}</Tag>
            
        }
    ];

    return (
     

      //------------
    //    <Layout>
    //   <Sider style={{ height: "100vh", backgroundColor: "white" }}>
    //     <Image
    //       src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
    //       preview={false}
    //     />
    //     <SideMenu/>
    //   </Sider>
    //   <Layout>
    //     <Content>
    //     <Card title = {'Orders'} style = {{margin : 20}} >
    //         <Table
    //             dataSource={orderHistory}
    //             columns = {tableColumns}
    //             rowKey = "orderID"
              
    //         />
    //     </Card>  
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Uber Eats Restaurant Dashboard ©2022
    //     </Footer>
    //   </Layout>
    // </Layout>

        //-------

        <Card title = {'Orders'} style = {{margin : 20}} >
        <Table
            dataSource={orderHistory}
            columns = {tableColumns}
            rowKey = "orderID"
          
        />
    </Card>  
       
    
      )
}

export default OrderHistory