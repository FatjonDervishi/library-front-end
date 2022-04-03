import React from "react";
import { Button, Card, Col, Row, } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import AddBook from "./components/addBook";

const Dashboard = () => {
  const token = window.localStorage.getItem("token");

  const [data, setData] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    getData();
  },[])
  
  const getData = () => {
    axios.get('http://localhost:9090/auth/library/book',{
      headers:{
        'Authorization': `Bearer ${token}`, 
      }
    }).then((res) => {
      setData(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div style={{padding:30}}>
      <h1 style={{textAlign: 'center'}}>Library</h1>
      <Row className="mt8" gutter={[16,16]}>
          {data && data.data.map((book,index) => {
            return(
            <Col key={index} xs={4}>
              <Card
                hoverable
                style={{ width: 240,height:400,boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}
                cover={<img alt="example" src={book.image} />}
              >
                <Card.Meta
                title={book.name}
                description={book.description}
                />
                <p>{book.author.name}</p>
                {book.categories && book.categories.map((category,index) => (
                  <p key={index}>{category.name}</p>
                ))}
              </Card>
            </Col>
          )})}
      </Row>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        icon={<PlusOutlined style={{fontSize: 26}}/>}
        style={{width: 80, position: 'absolute', bottom: 20, right: 20}}
      />
      <AddBook
        visible={visible}
        setVisible={setVisible}
        getData={getData}
        token={token}
      />
    </div>
  );
}

export default Dashboard;