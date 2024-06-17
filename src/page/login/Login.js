import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import '../login/login.css'
import Navigation from '../../components/Navigation/Navigation';
import { FaUserCircle } from 'react-icons/fa';
import FooterSimple from '../../components/FooterSimple/FooterSimple';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

  const Login = () => {
    localStorage.setItem('authorize', 'true');
    const navigate = useNavigate();
    let endpoint = "";
    const data = {};
    const [form] = Form.useForm();

    const onFinish = (values) => {
      const { confirmpassword, ...payload } = values;

      newLogin(payload);
      console.log({payload})
  };

  const newLogin = async ({ userType, ...body }) => {
    // on verifie si c est admin ou student
    console.log('the usertype should be empty',userType)

    if (userType === "admin") {
      endpoint = "http://localhost:8800/admin/login";
    } else if (userType === "student") {
      endpoint = "http://localhost:8800/student/login";
    }
    await axios
      .post(endpoint, body)
      .then((res) => {
        console.log({ res });
        console.log('the data is ',res)
        toast(res?.data?.message, { position: toast.topRight });
        if (userType === "admin"){
          localStorage.setItem('isAuthorised', true);

          navigate('/Admin');
         
        }
        else if (userType === "student"){
          localStorage.setItem('isAuthorised', true);


          navigate(`/student/page/${res.data.id}`);
        }
      })
      .catch((err) => {
        toast(err);
      });
  };


  return (
    <div> 
    <Navigation/>
    <ToastContainer position="top-left" />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center',borderWidth:'5px', borderColor:'black'}}>
      <h2 style={{fontFamily: "Montserrat"}}>LOG INTO YOUR ACCOUNT</h2>
      <FaUserCircle size={40} />
      </div>
<div style={{padding:"80px 0", display:"flex", justifyContent:'center'}}>
<Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form
          {...formItemLayout}
          form={form}
          name="login"
          onFinish={onFinish}
          initialValues={{
            username: "",
            password: "",
            userType: null,
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        ></Form>

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
      <Form.Item
            name="userType"
            label="User Type"
            rules={[{ required: true, message: "Please select user type" }]}
          >
      <Select
              placeholder="Select User Type"
              style={{ width: 200 }}
              options={[
                { label: "Student", value: "student" },
                { label: "Admin", value: "admin" },
              ]}
            />
            </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="" style={{color: "goldenrod"}}>
          Forgot password
        </a>
      </Form.Item>
      

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: "goldenrod"}}>
          Log in
        </Button>
        Or <a href="/SignUp" style={{color: "goldenrod"}}>Sign Up</a>
      </Form.Item>
    </Form>
   
</div>
    <FooterSimple/>
    </div>
  )
}

export default Login