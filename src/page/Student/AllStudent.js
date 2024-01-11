//import React from 'react'
import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import { Table } from "antd";
import axios from "axios";
import dayjs from "dayjs";

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
        <div>
          <h4> Students with account</h4>
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
                      dataIndex: "isbn",
                      key: "name",
                      render: (isbn) => booksMap[isbn]?.title,
                    },
                    { title: "ISBN", dataIndex: "isbn", key: "isbn" },
                    {
                      title: "Taken On",
                      dataIndex: "takenAt",
                      key: "takenAt",
                      render: (takenAt) =>
                        dayjs(takenAt).format("YYYY-MM-DD h:mm A"),
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
      </div>
      <FooterSimple />
    </div>
  );
}

export default AllStudent;
