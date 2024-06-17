import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function AddBook() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("http://localhost:8800/book/addBook", values)
      .then((res) => {
        console.log(res);
        // toast(res?.data, { position: toast.topRight });
        message.success("Book Added Successfully...");
        form.resetFields();
      })
      .catch((err) => {
        message.error("Error adding book");
      });
  };

  return (
    <div>
      <Navigation />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h2 style={{fontFamily: 'Montserrat', textAlign:'justify'}}>ADD YOUR BOOK DETAILS</h2>
        </div>
        <Form
          {...layout}
          form={form}
          initialValues={{ title: "", author: "", isbn: "", numberOfCopies: 1 }}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name="title"
            label="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[
              {
                type: "text",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="numberOfCopies"
            label="Copies"
            rules={[
              {
                type: "number",
                min: 1,
                max: 1000,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="isbn" label="ISBN">
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit" style={{backgroundColor: 'goldenrod'}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <FooterSimple />
    </div>
  );
}

export default AddBook;
