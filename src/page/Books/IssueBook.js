import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { Button, Input, InputNumber, message,Form, Select } from "antd";
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
const { Option } = Select;

  const [form] = Form.useForm();
  const [dataFromDatabase, setDataFromDatabase] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect( () => {

    const fetchData= async() => {

      try{
        const res= await axios.get("http://localhost:8800/book/getAllBook")
        const titles = res?.data.map(item => item.title);
        console.log('the coming data is ',titles)
        setDataFromDatabase(titles)
        console.log('the book list2222',dataFromDatabase)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  console.log('the book ------',dataFromDatabase)


  }, []);
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
          <h2 style={{textAlign:'center'}}>Issue Book To Student</h2>
        </div>
        <Form
          {...layout}
          form={form}
          initialValues={{ title: "", studentId: "" }}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name="studentId"
            label="Student ID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
      name="title"
      label="Title"
      rules={[
        {
          type: 'string', // Assuming the selected value is a string
          required: true,
          message: 'Please select a student ID!',
        },
      ]}
    >
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a student ID"
        optionFilterProp="children"
        onChange={(value) => setSelectedValue(value)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        value={selectedValue}
      >
        {dataFromDatabase?.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
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

export default IssueBook;
