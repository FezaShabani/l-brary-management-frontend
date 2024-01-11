import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function IssueBook() {
    const onFinish = (values) => {
        console.log(values);
      };
  return (
    <div>
    <Navigation/>
<div style={{display:"flex", flexDirection:"column"}}> 
<div>
<h4>Issue Book To Student</h4>
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
  name={['book', 'Title']}
  label="Title"
  rules={[
    {
      required: true,
    },
  ]}
>
  <Input />
</Form.Item>
<Form.Item
  name={['book', 'Student']}
  label="Student"
  rules={[
    {
      type: 'text',
    },
  ]}
>
  <Input />
</Form.Item>



<Form.Item
  wrapperCol={{
    ...layout.wrapperCol,
    offset: 8,
  }}
>
  <Button type="primary" htmlType="submit">
    Submit
  </Button>
</Form.Item>
</Form>
</div>
    <FooterSimple/>
</div>
  )
}

export default IssueBook