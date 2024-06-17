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
       

        <div style={{display:'flex',flexDirection:"column", justifyContent:'space-between', backgroundColor: '#34282C'}}>
        <div style={{display:'',color:'black',backgroundColor:'#34282C',}}>
          
          <p style={{fontSize: '22px',fontFamily: 'Montserrat' ,textAlign: 'center', color: "white", }}>WELCOME to your library, here you are able to access the book list, 
          Sign up or Login</p>
          
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
