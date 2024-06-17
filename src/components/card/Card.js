import { Card ,Col,Row} from 'antd';
import React from 'react'
import "./card.css"
function Carte({img, title}) {
  return (
    <Card className='custom-card' style={{backgroundColor: 'whitesmoke'}}>
    <Row align="middle">
      <Col span={6}>
        <img src={img} alt="icon" className='IMG' />
      </Col>
      <Col span={18}>
        <h2 className='title'>{title}</h2>
      </Col>
    </Row>
  </Card>
  )
}

export default Carte