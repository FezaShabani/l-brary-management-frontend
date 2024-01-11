import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import '../login/login.css'
import Navigation from '../../components/Navigation/Navigation';
import { FaUserCircle } from 'react-icons/fa';
import FooterSimple from '../../components/FooterSimple/FooterSimple';

function Login() {
  return (
    <div> 
    <Navigation/>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center',borderWidth:'5px', borderColor:'black'}}>
      <h2>LOG INTO YOUR ACCOUNT</h2>
      <FaUserCircle size={40} />
      </div>
<div style={{padding:"80px 0", display:"flex", justifyContent:'center'}}>
<Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/SignUp">SignUp</a>
      </Form.Item>
    </Form>
</div>
    <FooterSimple/>
    </div>
  )
}

export default Login