import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FooterSimple from '../../components/FooterSimple/FooterSimple'
import { Table } from 'antd'

function Student() {
    const bookList = [
        {
          id: 1,
          title: 'maitriser les math 2',
          copies: "5",
          author: "Mutombo et muyembe",
        },
        {
          id: 2,
          title: 'maitriser les math 2',
          copies: "5",
          author: "Mutombo et muyembe",
        },
        {
          id: 3,
          title: 'maitriser les math 2',
          copies: "5",
          author: "Mutombo et muyembe",
        },
        {
          id: 4,
          title: 'maitriser les math 2',
          copies: "5",
          author: "Mutombo et muyembe",
        },
        {
          id: 5,
          title: 'maitriser les math 2',
          copies: "5",
          author: "Mutombo et muyembe",
        },
      ];
      const columns = Object.keys(bookList[0]).map((key) => ({
        title: key.toUpperCase(),
        dataIndex: key,
        key,
      }));
  return (
    <div>
        <Navigation/>
        <div>
            <h2>Welcome</h2>
            <p>Here is the list of the books issued to you</p>
        </div>
        <div>
    <Table dataSource={bookList} columns={columns} />
    </div>
        <FooterSimple/>
    </div>
  )
}

export default Student