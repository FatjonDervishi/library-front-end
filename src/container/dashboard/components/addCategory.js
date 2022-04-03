import { Button, Col, Input, Row } from "antd";
import axios from "axios";
import React from "react";

const AddCategory = ({getData,token,getCategories}) => {
const [body,setBody] = React.useState({
    name:''
})

    const handleChange = (e) => {
        setBody(prev => ({
            ...prev,
            name : e.target.value
        }))        
    }

    const handleSave = () => {
        axios.post('http://localhost:9090/auth/library/category',{
            name: body.name
        },{
            headers:{
              'Authorization': `Bearer ${token}`,    
            }
          }).then((res) => {
            getCategories();
        })
    }

    return (
        <Row justify="end">
            <Col xs={24}>
                <p>Name</p>
                <Input
                placeholder="name"
                onChange={handleChange}
                />
            </Col>
            <Col className="mt8">
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

export default AddCategory;