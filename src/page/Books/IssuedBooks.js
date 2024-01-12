import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'

function IssuedBooks() {
  return (
    <div>
        <Navigation/>
        <div>
            <h1 style={{textAlign:'center'}}>Issued Books</h1>
        </div>
        <FooterSimple/>
    </div>
  )
}

export default IssuedBooks