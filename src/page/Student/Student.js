import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Button, Table } from 'antd'
import { useParams, useNavigate } from 'react-router';
import dayjs from "dayjs";
import axios from 'axios';
import { Link } from 'react-router-dom';



function Student() {
  //const navigate = useNavigate();
  //navigate('/');
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
          console.log('this is the student details',res);
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
      { title: "Book Title", dataIndex: "title", key: "name" },
      //{ title: "Book ISBN", dataIndex: "isbn", key: "name" },
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
        dayjs(takenAt).add(2, "weeks").format("YYYY-MM-DD"),},
  
     
    ];
    
      console.log('the student id is :',id)


  return (
    <div style={{backgroundColor: ''}}>
        <Navigation/>
        <div style={{textAlign:'center'}}>
            <h2 style={{fontFamily: 'Montserrat'}}>Welcome, {myStudent}!!!</h2>
            <p style={{fontSize:'20px', fontFamily:'Montserrat'}}>Here is the list of the books issued to you</p>
        </div>
        <div>
    <Table dataSource={bookList} columns={columns} />
    </div>
    <Link to ="/"><button style={{fontFamily:'Montserrat'}}>Logout</button></Link>
        <FooterSimple/>
    </div>
  )
}

export default Student