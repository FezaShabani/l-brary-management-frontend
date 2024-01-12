import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Table } from 'antd'
import { useParams } from 'react-router';
import dayjs from "dayjs";
import axios from 'axios';


function Student() {
    // const bookList = [
    //     {
    //       id: 1,
    //       title: 'maitriser les math 2',
    //       copies: "5",
    //       author: "Mutombo et muyembe",
    //     },
    //     {
    //       id: 2,
    //       title: 'maitriser les math 2',
    //       copies: "5",
    //       author: "Mutombo et muyembe",
    //     },
    //     {
    //       id: 3,
    //       title: 'maitriser les math 2',
    //       copies: "5",
    //       author: "Mutombo et muyembe",
    //     },
    //     {
    //       id: 4,
    //       title: 'maitriser les math 2',
    //       copies: "5",
    //       author: "Mutombo et muyembe",
    //     },
    //     {
    //       id: 5,
    //       title: 'maitriser les math 2',
    //       copies: "5",
    //       author: "Mutombo et muyembe",
    //     },
    //   ];
      // const columns = Object.keys(bookList[0]).map((key) => ({
      //   title: key.toUpperCase(),
      //   dataIndex: key,
      //   key,
      // }));

  //  const  columns=[
  //     {
  //       title: "Book Title",
  //       dataIndex: "isbn",
  //       key: "name",
  //       render: (isbn) => booksMap[isbn]?.title,
  //     },
  //     { title: "ISBN", dataIndex: "isbn", key: "isbn" },
  //     {
  //       title: "Taken On",
  //       dataIndex: "takenAt",
  //       key: "takenAt",
  //       render: (takenAt) =>
  //         dayjs(takenAt).format("YYYY-MM-DD h:mm A"),
  //     },
  //     {
  //       title: "Due On",
  //       dataIndex: "takenAt",
  //       key: "isbn",
  //       render: (takenAt) =>
  //         dayjs(takenAt).add(2, "weeks").format("YYYY-MM-DD")
  //     }
  //   ]
  const { id } = useParams();

  const [myStudent, setMyStudent] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [studentName, setStudentName] = useState("");
    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8800/student/getOneStudent/page/${id}`,
          )
          console.log('this is thr student details',res);
          setMyStudent(res?.data?.username);
          setBookList(res?.data?.books)
          setStudentName(res?.data)
          console.log("the student list", myStudent);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchStudents()
     
    }, []);
    const columns = [
      { title: "Book Title", dataIndex: "isbn", key: "name" },
      { title: "Book ISBN", dataIndex: "isbn", key: "name" },
      { title: "Taken On", dataIndex: "takenAt", key: "takenAt" },
      { title: "Due On", dataIndex: "takenAt", key: "isbn" },
  
     
    ];
    
      console.log('the student id is :',id)
  return (
    <div>
        <Navigation/>
        <div style={{textAlign:'center'}}>
            <h2>Welcome, {myStudent}!!!</h2>
            <p style={{fontSize:'20px'}}>Here is the list of the books issued to you</p>
        </div>
        <div>
    <Table dataSource={bookList} columns={columns} />
    </div>
        <FooterSimple/>
    </div>
  )
}

export default Student