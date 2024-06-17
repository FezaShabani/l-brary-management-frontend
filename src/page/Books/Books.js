import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Table, message } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Input } from 'antd';
// import 'antd/dist/antd.css';

const { Search } = Input;
function Books() {
  const[myBook,setMyBook]=useState([])
  const onSearch = (value) => {
    console.log(value);
  
      axios
        .post("http://localhost:8800/book/searchBooks", {title:value})
        .then((res) => {
          message.success("Book retrieved");
          const list=[]
          list.push(res?.data)
          setMyBook(res.data)
          console.log("Book found",res.data);
          //form.resetFields(); 
        })
        .catch((e) => {
          console.error(e);
          message.error(
            e.response?.data?.message ?? "Could not find books",
          );
        });
   
  };

  //       const deleteBook = (id) => {
       

  //   axios
  //     .delete(`http://localhost:8800/book/deleteBook/${id}`)
  //     .then((res) => {
  //       message(res.message);
  //       setMyBook((prevBooks) => prevBooks.filter((book) => book._id !== id));
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       console.log('enn',e)
  //       message.error(e.response?.message ?? "Error deleting book wesh");
  //     });
  // };
  const deleteBook = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8800/book/deleteBook/${id}`);
        message(res.message); // Assuming the server sends a success message in res.data.message
        setMyBook((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (e) {
       // console.error(e);
        console.log('enn',e);
        //message.error(e.response?.message ?? "Error deleting book");
    }
};


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
      // const columns = !dataWithKeyAndIndex.length ? [] : Object.keys(dataWithKeyAndIndex[0]).map((key) => ({
      //   title: key.toUpperCase(),
      //   dataIndex: key,
      // }));
    

      const columns = !dataWithKeyAndIndex.length
      ? []
      : [
          // Mapping existing columns
          ...Object.keys(dataWithKeyAndIndex[0]).map((key) => ({
            title: key.toUpperCase(),
            dataIndex: key,
          })),
          // Adding an action column
          {
            title: 'ACTIONS',
            key: 'actions', 
            render: (text, record) => <button onClick={()=>{
              console.log('record',record.isbn)
              deleteBook(record.isbn)
            }}>delete</button> , 
          },
        ];


  return (
    <div>
    <Navigation/>
    <div>
        <h1 style={{textAlign:'center', fontFamily: 'Montserrat', backgroundColor: 'goldenrod', marginTop: '0px'}}> AVAILABLE BOOKS</h1>
    </div>
    <div>
   
      <div style={{width:'100%', display:'block', width:'30%',margin:'10px'}}>
      <Search placeholder="Enter your research" onSearch={onSearch} enterButton />
    </div>
  
    <Table dataSource={myBook} columns={columns} />
    </div>
    <FooterSimple/>
    </div>
  )
}

export default Books