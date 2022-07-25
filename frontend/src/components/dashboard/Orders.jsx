import React from 'react'
import orders from '../../assets/orders.json'
import { Card , Table , Tag  } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;


const Orders = () => {
    const navigate = useNavigate();
    const renderOrderStatus = (orderStatus) => {
        if(orderStatus === 'Accepted'){
            return <Tag color={'green'}>{orderStatus}</Tag>
        }
        if(orderStatus === 'Pending'){
            return <Tag color={'orange'}>{orderStatus}</Tag>
        }
        if(orderStatus === 'Declined'){
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
        
    };
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
            render : renderOrderStatus
            
        }
    ];
  return (

    
    //---------

  //  <Layout>
  //     <Sider style={{ height: "100vh", backgroundColor: "white" }}>
  //       <Image
  //         src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
  //         preview={false}
  //       />
  //       <SideMenu/>
  //     </Sider>
  //     <Layout>
  //       <Content>
  //       <Card title = {'Orders'} style = {{margin : 20}} >
  //       <Table
  //           dataSource={orders}
  //           columns = {tableColumns}
  //           rowKey = "orderID"
  //           onRow={(orderItem) => ({
  //               onClick : ()=> navigate(`order/${orderItem.orderID}`)
  //           })}
  //       />
  //   </Card> 
  //       </Content>
  //       <Footer style={{ textAlign: "center" }}>
  //         Uber Eats Restaurant Dashboard ©2022
  //       </Footer>
  //     </Layout>
  //   </Layout>
  <Card title = {'Orders'} style = {{margin : 20}} >
  <Table
      dataSource={orders}
      columns = {tableColumns}
      rowKey = "orderID"
      onRow={(orderItem) => ({
          onClick : ()=> navigate(`${orderItem.orderID}`)
      })}
  />
</Card> 

    //------------
    

  )
}

export default Orders