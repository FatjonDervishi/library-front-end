import React from "react";
import { Input,Row,Col,Select, Button } from "antd";
import axios from "axios";

const NewBook = ({token,setVisible,getData,category,author}) => {


  const [body,setBody] = React.useState({
    name:'',
    description:'',
    author:null,
    category: null,
    image: '',
  });



  const handleChange = (attr) => (e) => {
    const value = typeof e === 'object' ? e.target.value : e;

    setBody(prevState => ({
      ...prevState,
      [attr] : value
    }))

  }

  const handleSave = () => {
    axios.post('http://localhost:9090/auth/library/book',{
      name: body.name,
      description : body.description,
      image: body.image,
      author : {
        id : body.author
      },
      categories : [
        {
        id : body.category
        }
    ]
    },
    {
      headers:{
      'Authorization': `Bearer ${token}`, 
    }
  }).then(() => {
      getData();
      setVisible(false);
    }).catch((err) => {
      console.log(err);
    })
  }



return (
<Row gutter={[16, 16]} justify="end">
        <Col xs={24}>
          <p>Name</p>
          <Input
          onChange={handleChange('name')} 
          placeholder="Name"
          />
        </Col>
        <Col xs={24}>
          <p>Description</p>
          <Input 
          onChange={handleChange('description')}
          placeholder="Description"
          />
        </Col>
        <Col xs={24}>
          <p>Image</p>
          <Input
          onChange={handleChange('image')} 
          placeholder="Image Url"
          />
        </Col>
        <Col xs={24}>
          <p>Author</p>
          <Select
            style={{width: '100%'}}
            onChange={handleChange('author')}
            placeholder="Select Author"
          >
            {author && author.data.map((record,index) => (
              <Select.Option key={index} value={record.id}>
                {record.name}
              </Select.Option>
              )
            )}
          </Select>
        </Col>
        <Col xs={24}>
          <p>Category</p>
          <Select
            style={{width: '100%'}}
            placeholder="Select Category"
            onChange={handleChange('category')}
          >
             {category && category.data.map((record,index) => (
              <Select.Option key={index} value={record.id}>
                {record.name}
              </Select.Option>
              )
            )}
          </Select>
        </Col>
        <Col>
            <Button
            type="primary"
            onClick={handleSave}
            >
                Save
            </Button>
        </Col>
      </Row>
);
}

export default NewBook;