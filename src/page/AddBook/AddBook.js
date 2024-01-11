import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function AddBook() {
const endpoint=""

const [body, setBody] = useState({
  author: "",
  title: "",
  ISBN: "",
  numberOfCopies:0,


});
    const onFinish = (values) => {
        console.log(values);
      };

      const createNewBook = async () => {
        
          endpoint = "http://localhost:8800/book/addBook";
        await axios
          .post(endpoint, body)
          .then((res) => {
            console.log(res );
            toast(res?.data, { position: toast.topRight });
          })
          .catch((err) => {
            toast(err);
          });
      };

  return (
    <div>
        <Navigation/>
<div style={{display:"flex", flexDirection:"column"}}> 
<div>
    <h4>Add Your Book</h4>
</div>
<Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    // validateMessages={validateMessages}
  >
    <Form.Item
      name={['book', 'title']}
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
      name={['book', 'Author']}
      label="Author"
      rules={[
        {
          type: 'text',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['book', 'copies']}
      label="Copies"
      rules={[
        {
          type: 'number',
          min: 1,
          max: 1000,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['book', 'ISBN']} label="ISBN">
      <Input />
    </Form.Item>
   
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={createNewBook}>
        Submit
      </Button>
    </Form.Item>
  </Form>
</div>
        <FooterSimple/>
    </div>
  )
}

export default AddBook