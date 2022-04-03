import React from 'react';
import {Modal, Tabs } from "antd";
import NewBook from './newBook';
import AddAuthor from './addAuthor';
import AddCategory from './addCategory';
import axios from 'axios';

const AddBook = ({visible, setVisible,getData,token}) => {

  const[category,setCategory] = React.useState(null);
  const[author,setAuthor] = React.useState(null);

  React.useEffect(() =>{
    getCategories();
    getAuthors();
  },[])

  const getCategories = () => {
    axios.get('http://localhost:9090/auth/library/category/',{
      headers:{
        'Authorization': `Bearer ${token}`,    
      }
    }).then((res) => {
      setCategory(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getAuthors = () => {
    axios.get('http://localhost:9090/auth/library/author/',{
      headers:{
        'Authorization': `Bearer ${token}`, 
      }
    }).then((res) => {
      setAuthor(res);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      title="Create"
      footer={null}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Add Book" key="1">
          <NewBook
           token={token}
           category={category}
           author={author}
           getData={getData}
           setVisible={setVisible}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Add Author" key="2">
          <AddAuthor getData={getData} token={token} getAuthors={getAuthors}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Add Category" key="3">
          <AddCategory getData={getData} token={token} getCategories={getCategories}/>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
};

export default AddBook;