//import React from 'react'
import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { Table } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { Input } from 'antd';
//import { Table, message } from 'antd';

const { Search } = Input;
function AllStudent() {
  const [myStudent, setMyStudent] = useState([]);
  const [booksMap, setBooksMap] = useState({});

  const columns = [
    {
      key: "firstName",
      title: "First Name",
      dataIndex: "firstname",
    },
    {
      key: "lastName",
      title: "Last Name",
      dataIndex: "lastname",
    },
    {
      key: "username",
      title: "Username",
      dataIndex: "username",
    },
    {
      key: "books",
      title: "Books Issued",
      dataIndex: "books",
      render: (books) => books.length,
    },
  ];
  const onSearch = (value) => {
    console.log(value);
  
      axios
        .post("http://localhost:8800/student/searchStudents", {name: value})
        .then((res) => {
          //message.success("Students retrieved");
          const list=[]
          list.push(res?.data)
          setMyStudent(res.data)
          console.log("Students found",res.data);
          //form.resetFields(); 
        })
        .catch((e) => {
          console.error(e);
          //message.error(
          //e.response?.data?.message ?? "Could not find student",
         // );
        });
   
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/student/getAllStudent",
        );
        console.log(res);
        setMyStudent(res?.data);
        console.log("the student list", myStudent);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/book/getAllBook");
        console.log(res);
        setBooksMap(
          res?.data?.reduce((acc, curr) => ({ ...acc, [curr.isbn]: curr }), {}),
        );
        console.log("the book list", myStudent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks().finally(fetchStudents);
  }, []);

  return (
    <div>
      <Navigation />
        
        <div>
          <h1 style={{textAlign: 'center', fontFamily: "Montserrat", backgroundColor: "goldenrod", margin: "0px", color: "white"}}> STUDENTS ACCOUNTS</h1>
        </div>

      <div>
          <div style={{width:'100%', display:'block', width:'30%',margin:'10px'}}>
            <Search placeholder="Enter your research" onSearch={onSearch} enterButton />
          </div>

        <Table
          dataSource={myStudent}
          pagination={false}
          columns={columns}
          rowKey={(record) => record._id}
          expandable={{
            expandedRowRender: (record) => {
              return (
                <Table
                  pagination={false}
                  dataSource={record.books}
                  columns={[
                    {
                      title: "Book Title",
                      dataIndex: "title",
                      key: "name"
                    },
                   // { title: "ISBN", dataIndex: "isbn", key: "name",
                   // render: (isbn) => booksMap[isbn]?.title
                  //},
                    {
                      title: "Taken On",
                      dataIndex: "takenAt",
                      key: "takenAt",
                      render: (takenAt) =>
                        dayjs(takenAt).format("YYYY-MM-DD "),
                    },
                    {
                      title: "Due On",
                      dataIndex: "takenAt",
                      key: "isbn",
                      render: (takenAt) =>
                        dayjs(takenAt).add(2, "weeks").format("YYYY-MM-DD"),
                    },
                  ]}
                />
              );
            },
          }}
        />
      <div/>
        
      </div>
      <FooterSimple />
    </div>
  );
}

export default AllStudent;
