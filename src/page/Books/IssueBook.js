import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function IssueBook() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("http://localhost:8800/admin/issueBook", values)
      .then(() => {
        message.success("Book issued to student");
        form.resetFields();
      })
      .catch((e) => {
        console.error(e);
        message.error(
          e.response?.data?.message ?? "Could not issue book to student",
        );
      });
  };

  return (
    <div>
      <Navigation />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h4>Issue Book To Student</h4>
        </div>
        <Form
          {...layout}
          form={form}
          initialValues={{ isbn: "", studentId: "" }}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name="isbn"
            label="ISBN"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="studentId"
            label="Student ID"
            rules={[
              {
                type: "text",
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
      <FooterSimple />
    </div>
  );
}

export default IssueBook;
