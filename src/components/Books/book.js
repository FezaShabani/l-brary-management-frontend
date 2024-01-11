import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
} from 'antd';

//css stuff
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
//ce qui s'affiche quand je veux enregistrer les livres
const Book = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
 
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="Book title"
        label="Book title"
        rules={[
          {
            type: 'text',
          },
          {
            required: true,
            message: 'Please enter the book title',
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
            type: 'text',
          },
          {
            required: true,
            message: 'Please enter the author of the book',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="isbn"
        label="ISBN"
        rules={[
          {
            required: true,
            message: 'Please enter the book ISBN',
          },
        ]}
        hasFeedback
      >

      </Form.Item>

      <Form.Item
        name="number of copies"
        label="Number of copies"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please enter the number of copies for this book',
          },
        ]}
      >
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Book;