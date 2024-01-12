import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Table } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

function Books() {
  const[myBook,setMyBook]=useState([])
   
      useEffect( () => {

        const fetchData= async() => {

          try{
            const res= await axios.get("http://localhost:8800/book/getAllBook")
            console.log(res)
            setMyBook(res?.data)
            console.log('the book list',myBook)
          }
          catch(error){
            console.log(error)
          }
        }
        fetchData()

      }, []);

      const filteredData = myBook.map(({ _id, __v, ...rest }) => rest);
      const dataWithKeyAndIndex = filteredData.map((item, index) => ({
        key: index + 1,
        //index: index + 1,
        ...item,
      }));
      const columns = !dataWithKeyAndIndex.length ? [] : Object.keys(dataWithKeyAndIndex[0]).map((key) => ({
        title: key.toUpperCase(),
        dataIndex: key,
      }));
    
  return (
    <div>
    <Navigation/>
    <div>
        <h1 style={{textAlign:'center'}}> Availaible Books</h1>
    </div>
    <div>
    <Table dataSource={myBook} columns={columns} />
    </div>
    <FooterSimple/>
    </div>
  )
}

export default Books