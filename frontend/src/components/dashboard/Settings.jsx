import React from 'react'
import {Form , Input ,Card , Button} from 'antd'
import '../../../src/index.css';
import { Layout, Image } from "antd";
import SideMenu from './SideMenu';
const { Sider, Content, Footer } = Layout;


const Settings = () => {
  return (


    //--------------

//<Layout>
  //     <Sider style={{ height: "100vh", backgroundColor: "white" }}>
  //       <Image
  //         src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
  //         preview={false}
  //       />
  //       <SideMenu/>
  //     </Sider>
  //     <Layout>
  //       <Content>
  //       <Card title = "Restaurant Details" style={{margin:20}}>
  //       <Form layout='vertical' wrapperCol={{span : 8}}>
  //           <Form.Item label="Restaurant Name" required>
  //               <Input  placeholder='Enter Restaurant Name'/>
  //           </Form.Item>
  //           <Form.Item label="Restaurant Address" required>
  //               <Input  placeholder='Enter Restaurant Address'/>
  //           </Form.Item>
  //           <Form.Item >
  //               <Button type='primary'>
  //                   Submit
  //               </Button>
  //           </Form.Item>

  //       </Form>
  //   </Card>
  //       </Content>
  //       <Footer style={{ textAlign: "center" }}>
  //         Uber Eats Restaurant Dashboard ©2022
  //       </Footer>
  //     </Layout>
  //  </Layout>


    //-----------
    <Card title = "Restaurant Details" style={{margin:20}}>
    <Form layout='vertical' wrapperCol={{span : 8}}>
        <Form.Item label="Restaurant Name" required>
            <Input  placeholder='Enter Restaurant Name'/>
        </Form.Item>
        <Form.Item label="Restaurant Address" required>
            <Input  placeholder='Enter Restaurant Address'/>
        </Form.Item>
        <Form.Item >
            <Button type='primary'>
                Submit
            </Button>
        </Form.Item>

    </Form>
</Card>
   
  )
}

export default Settings