import React from 'react'
import { Form , Input , Button , Card , InputNumber } from 'antd'
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;

const {TextArea} = Input;

const CreateMenuItem = () => {
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
    //     <Card title="New Menu Item" style={{margin : 20}} >
    //     <Form layout='vertical' wrapperCol={{span : 8}}>
    //         <Form.Item label = "Dish Name" required>
    //             <Input placeholder='Enter Dish Name'/>
    //         </Form.Item>
    //         <Form.Item label = "Dish Description" required>
    //             <TextArea rows ={4} placeholder='Enter Dish Description'/>
    //         </Form.Item>
    //         <Form.Item label = "Price (₹)" required>
    //             <InputNumber  placeholder='Enter Price'/>
    //         </Form.Item>
    //         <Form.Item >
    //             <Button type='primary'>Submit</Button>
    //         </Form.Item>
    //     </Form>
    // </Card>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Uber Eats Restaurant Dashboard ©2022
    //     </Footer>
    //   </Layout>
    // </Layout>

    //-----------
    <Card title="New Menu Item" style={{margin : 20}} >
    <Form layout='vertical' wrapperCol={{span : 8}}>
        <Form.Item label = "Dish Name" required>
            <Input placeholder='Enter Dish Name'/>
        </Form.Item>
        <Form.Item label = "Dish Description" required>
            <TextArea rows ={4} placeholder='Enter Dish Description'/>
        </Form.Item>
        <Form.Item label = "Price (₹)" required>
            <InputNumber  placeholder='Enter Price'/>
        </Form.Item>
        <Form.Item >
            <Button type='primary'>Submit</Button>
        </Form.Item>
    </Form>
</Card>
    
  )
}

export default CreateMenuItem