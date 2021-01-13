import React from 'react';
import { Table,Button } from 'antd';
import 'antd/dist/antd.css';

class DeleteableTable extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      color: "white",
      backgroundColor: "red"
   };
    this.columns = [
      {
        title: 'UserID',
        dataIndex: 'id',
        // width: '30%',
      },
      {
        title: 'UserName',
        dataIndex: 'username',
      },
      {
        title: 'FuLL Name',
        dataIndex: 'fullname',

      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) => 
          this.state.dataSource.length >= 1 ? (
               <Button style={this.style} onClick={()=> this.handleDelete(record.key) }>Delete</Button>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          id: '1000',
          username: 'Mark@tcs.com',
          fullname: 'Mark Johson',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          id: '1001',
          username: 'Manish44@tcs.com',
          fullname: 'Manish Chaudhary',
          age: '23',
          address: 'Cochin, Kerala',
        },
        {
          key: '3',
          id: '1003',
          username: 'Mona@unisys.com',
          fullname: 'Mona Minor',
          age: '25',
          address: 'Patna, Bihar',
        },
        {
          key: '4',
          id: '1004',
          username: 'Mukund@oracle.com',
          fullname: 'Mukund kumar',
          age: '35',
          address: 'London, Park Lane no. 2',
        },
      ],
      count: 4,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  render() {
    const { dataSource } = this.state;
   
    const columns = this.columns.map((col) => {
      return {
        ...col,
        onCell: (record) => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
        }),
      };
    });
    return (
        <div>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        </div>
    );
  }
}

export default DeleteableTable