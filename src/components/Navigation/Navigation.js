import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
  let isAuthorisedValue = localStorage.getItem('isAuthorised');

  return (
    <div style={{backgroundColor:'#34282C', display:"flex", justifyContent:'space-between',color:'white',fontFamily: 'Montserrat'}}>
      <div>
      <h3>My Library Online</h3>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <ul style={{display:'flex',gap:'2rem', marginRight:'20px'}}>
       <Link to ="/">
          <li style={{ color: 'white', textDecoration: 'none' }}> Home</li>
       </Link>   
        <Link to="/books">
          <li style={{ color: 'white', textDecoration: 'none' }}>Books</li>
        </Link> 
         
        {/* <Link to="/Login">
          <li style={{ color: 'white', textDecoration: 'none' }}> Login</li>
        </Link>  */}

        {!isAuthorisedValue && <Link to="/Login">
          <li style={{ color: 'white', textDecoration: 'none' }}> Login</li>
        </Link>  }
        {isAuthorisedValue && <Link to="/Login"onClick={()=>{localStorage.removeItem('isAuthorised');
}}>
          <li style={{ color: 'white', textDecoration: 'none' }}> Logout</li>
        </Link>  }
        <Link to ="/SignUp">
          <li style={{ color: 'white', textDecoration: 'none' }}> SignUp</li>
          </Link>

        </ul>
      </div>


    </div>
  )
}

export default Navigation