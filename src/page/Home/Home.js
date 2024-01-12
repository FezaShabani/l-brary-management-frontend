import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Carte from '../../components/card/Card'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Link } from 'react-router-dom';

function Home() {
  const divStyle = {
    backgroundImage: 'url("../assets/library bg.jpg")',
    backgroundSize: 'cover',
    width: '100%',
    height: '350px',
  };
  return (
    <div style={{display:'flex',flexDirection:"column", justifyContent:'space-between', backgroundColor:''}}>
        <Navigation/>
        <div style={divStyle} >
        </div>
       

        <div style={{display:'flex',flexDirection:"column", justifyContent:'space-between',}}>
        <div style={{display:'',color:'black',backgroundColor:'white',}}>
          
          <p style={{fontSize: '22px',fontFamily: 'Georgia' ,textAlign: 'center'}}>Welcome to your library, here you can access the book list, 
          create an account or login</p>
          
          </div>
          <div style={{display:'flex',flexDirection:"row", justifyContent:'space-evenly',
           width:'100%', height: "200px"}}>
       <Link to="/Login"><Carte title="Log in" img="../assets/login icon.png"/></Link> 
        <Link to="/SignUp"><Carte title="Sign Up" img="../assets/sign-up.png"/></Link>
          </div>
        </div>
        <FooterSimple/>
    </div>
  )
}

export default Home
