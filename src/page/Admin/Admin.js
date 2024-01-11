import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

function Admin() {
    const functionsList=[
    {
    name:"Add a new Book",
    path:"/Admin/AddBook",
    image:"../assets/book with hands.jpg"
},

    {name:   "Issue a Book",
     path:"/Admin/IssueBook",
    image:"../assets/book.jpg"

    },
   {   name:"List of Books",
        path:"/Books",
    image:"../assets/Book stack.png"


},{name:  "All students",
    path:"/Admin/AllStudent",
    image:"../assets/student group.png"

},
{name:"Issued Books",
    path:"/Admin/IssuedBooks",
    image:"../assets/single book.jpg"

}


    
    
  ]
  
  return (
    <div>
        <Navigation/>
        <div style={{ padding: '20px',textAlign: 'center'}}>
            <h1>Welcome Admin</h1>
            <p style={{fontSize: '22px'}}>Here is the list of the functionalities made available to you</p>
        </div>
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap' ,justifyContent:"center",}}>
      {functionsList.map(func => (
        <div key={func.name} style={{ margin: '16px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',transition: 'transform 0.2s'}}>
            <Link to ={func.path}>

          <Card title={func.name}   
           cover={<img alt={func.name} src={func.image} style={{width:'210px',  height: "150px"}} />}
          hoverable>
            <p>{func.description}</p>
          </Card>
            </Link>
        </div>
      ))}
    </div>
      
        <FooterSimple/>
    </div>
  )
 
}

export default Admin