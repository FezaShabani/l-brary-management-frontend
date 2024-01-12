import React from "react";
import { Button, Form, Input, Select } from "antd";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const SignUp = () => {
  let endpoint = "";
  const data = {};
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { confirmpassword, ...payload } = values;

    createNewUser(payload);
  };

  const createNewUser = async ({ userType, ...body }) => {
    // on verifie si c est admin ou student

    if (userType === "admin") {
      endpoint = "http://localhost:8800/admin/signUp";
    } else if (userType === "student") {
      endpoint = "http://localhost:8800/student/signUp";
    }
    await axios
      .post(endpoint, body)
      .then((res) => {
        console.log({ data });
        toast(res?.data, { position: toast.topRight });
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div>
      <Navigation />
      <ToastContainer position="top-left" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderWidth: "5px",
          borderColor: "black",
        }}
      >
        <h2>CREATE YOUR ACCOUNT</h2>
        <FaUserCircle size={40} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            username: "",
            lastname: "",
            firstname: "",
            id: "",
            password: "",
            userType: null,
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="firstname"
            label="Firstname"
            rules={[
              {
                type: "text",
              },
              {
                required: true,
                message: "Please input your firstname",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[
              {
                type: "text",
              },
              {
                required: true,
                message: "Please input your lastname",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmpassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The new password that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="id"
            label="ID"
            rules={[
              {
                type: "text",
              },
              {
                required: true,
                message: "Please input your ID",
              },
            ]}
          >
            <Input />
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

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>

      {<FooterSimple />}
    </div>
  );
};
export default SignUp;
