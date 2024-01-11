import React, { useState } from 'react';
import { Modal, Form, Input, Button, Card } from 'antd';

const DeleteModal = ({ visible, onCancel, onOk }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      // Do something with the title and description
      console.log('Title:', values.title);
      console.log('Description:', values.description);

      // Close the modal
      onOk();

      // You can perform further actions like sending a request to delete the item
    });
  };

  return (
    <Modal
      title="Delete Item"
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter the description' }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

