import React from 'react'
import { Card , Descriptions , Divider , List ,Button } from 'antd' ; 
import dishes from '../../assets/dishes.json'
import {useParams} from 'react-router-dom'
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;



const DetailedOrder = () => {
  const {id} = useParams()
  return (

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
            
    // <Card title = {`Order ${id}`} style = {{margin : 20 }}>
    //   <Descriptions bordered column={{lg:1 , md:1 , sm : 1}}>
    //     <Descriptions.Item label = "Customer" >
    //       Tushar Saini
    //     </Descriptions.Item>
    //     <Descriptions.Item label = "Customer Address" >
    //       Jaipur
    //     </Descriptions.Item>
    //   </Descriptions>
    //   <Divider/>
    //   <List
    //     dataSource={dishes}
    //     renderItem = {(dishItem) => (
    //       <List.Item>
    //         <div style={{fontWeight : "bold"}}>{dishItem.name} x{dishItem.quantity}</div>
            
    //         <div>₹{dishItem.price}</div>
    //       </List.Item>
    //     )}
    //   />
    //   <Divider/>
    //   <div style={styles.totalSumContainer}>
    //     <h2>Total</h2>
    //     <h2 style={styles.totalPrice}>₹99</h2>
    //   </div>
    //   <Divider/>
    //   <div style={styles.buttonsContainer}>
    //       <Button block type='danger' size='large' style={styles.button}>
    //         Decline Order
    //       </Button>
    //       <Button block type='primary'  size='large' style={styles.button}>
    //         Accept Order
    //       </Button>
    //   </div>
    //       <Button block type='primary'  size='large' >
    //         Food Is Done
    //       </Button>
    // </Card>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Uber Eats Restaurant Dashboard ©2022
    //     </Footer>
    //   </Layout>
    // </Layout> 


    <Card title = {`Order ${id}`} style = {{margin : 20 }}>
      <Descriptions bordered column={{lg:1 , md:1 , sm : 1}}>
        <Descriptions.Item label = "Customer" >
          Tushar Saini
        </Descriptions.Item>
        <Descriptions.Item label = "Customer Address" >
          Jaipur
        </Descriptions.Item>
      </Descriptions>
      <Divider/>
      <List
        dataSource={dishes}
        renderItem = {(dishItem) => (
          <List.Item>
            <div style={{fontWeight : "bold"}}>{dishItem.name} x{dishItem.quantity}</div>
            
            <div>₹{dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider/>
      <div style={styles.totalSumContainer}>
        <h2>Total</h2>
        <h2 style={styles.totalPrice}>₹99</h2>
      </div>
      <Divider/>
      <div style={styles.buttonsContainer}>
          <Button block type='danger' size='large' style={styles.button}>
            Decline Order
          </Button>
          <Button block type='primary'  size='large' style={styles.button}>
            Accept Order
          </Button>
      </div>
          <Button block type='primary'  size='large' >
            Food Is Done
          </Button>
    </Card>
  )
}

const styles = {
    totalSumContainer : {
      display : 'flex',
      flexDirection : 'row'
    } , 
    totalPrice : {
      marginLeft : 'auto',
      fontWeight : 'bold'
    },
    buttonsContainer : {
      display : 'flex',
      paddingBottom : 20
    },
    button : {
      marginRight : 20,
      marginLeft : 20
    }
  }
  

export default DetailedOrder