//import React from 'react'
/*import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Table } from 'antd';
import axios from 'axios';

function AllStudent() {
    const[myStudent,setMyStudent]=useState([]);

     const columns = Object.keys(myStudent[0]).map((key) => ({
        title: key.toUpperCase(),
        dataIndex: key,
        key,
      }));

      useEffect( () => {

        const fetchData= async() => {

          try{
            const res= await axios.get("http://localhost:8800/student/getAllStudent")
            console.log(res)
            setMyStudent(res?.data)
            console.log('the student list',myStudent)
          }
          catch(error){
            console.log(error)
          }
        }
        fetchData()

      }, []);
    
  return (
    <div>
        <Navigation/>
        <div>

    <div>
      <h4> Students with account</h4>
    </div>
    
    <Table dataSource={myStudent} columns={columns} />

    </div>
        <FooterSimple/>
    </div>
  )
}

export default AllStudent*/