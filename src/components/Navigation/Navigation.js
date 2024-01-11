import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <div style={{backgroundColor:'#34282C', display:"flex", justifyContent:'space-between',color:'white',fontFamily: ''}}>
      <div>
      <h3>Online Library Management</h3>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <ul style={{display:'flex',gap:'2rem', marginRight:'20px'}}>
       <Link to ="/">
          <li style={{ color: 'white', textDecoration: 'none' }}> Home</li>
       </Link>   
        <Link to="/books">
          <li style={{ color: 'white', textDecoration: 'none' }}>Books</li>
        </Link>  
        <Link to="/Login">
          <li style={{ color: 'white', textDecoration: 'none' }}> Login</li>
        </Link> 
        <Link to ="/SignUp">
          <li style={{ color: 'white', textDecoration: 'none' }}> SignUp</li>
          </Link>

        </ul>
      </div>


    </div>
  )
}

export default Navigation