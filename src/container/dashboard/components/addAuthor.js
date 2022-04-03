import React from "react";
import { Row,Input,Col, Button } from "antd";
import axios from "axios";

const AddAuthor = ({getData,token,getAuthors}) => {

    const [body,setBody] = React.useState({
        name:'',
        bio:''
    });

    const handleChange = (attr) => (e) => {
        setBody(prev => ({
            ...prev,
            [attr] : e.target.value
        }))
    }

    const handleSave = () => {
        axios.post('http://localhost:9090/auth/library/author',{
            name: body.name,
            bio: body.bio
        },
        {
            headers:{
              'Authorization': `Bearer ${token}`,    
            }
        }).then((res) => {
            getAuthors();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Row justify="end">
            <Col xs={24}>
            <p>Name</p>
            <Input
            placeholder="Name"
            onChange={handleChange('name')}
            />
            </Col>
            <Col xs={24}>
                <p>Bio</p>
                <Input
                onChange={handleChange('bio')}
                placeholder="Bio"
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

export default AddAuthor;