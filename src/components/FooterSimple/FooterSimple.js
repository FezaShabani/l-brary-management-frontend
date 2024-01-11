import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FooterSimple() {
  return (
    <div style={{backgroundColor:'#34282C', display:"flex", flexDirection: "row" ,
    justifyContent:'space-between',
    color:'white',maxHeight:"120px", position: 'fixed',
    bottom: 0, width: '100%',}}>
      <div>
        <h5>Library</h5>
      </div>
      <div style={{display: "flex", flexDirection:"row", gap:"5px", alignItems:"center",justifyContent:'space'}}>
      <FaPhoneAlt />
      <h6>+905337894562</h6>
      <FaLocationDot />
      <h6>Kyrenia, Northen Cyprus</h6>
      </div>
    
    </div>
    
  )
}

export default FooterSimple