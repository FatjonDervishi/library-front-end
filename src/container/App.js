import React from "react";
import SignIn from "./signin/signin";
import Dashboard from "./dashboard/dashboard";
import axios from "axios";
import { SERVER_BASE_URL } from "../settings";
import { notification } from "antd";
import { Route,Routes,useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    userName: '',
    password: ''
  });

  const openNotification = placement => {
    notification.error({
      message: `Wrong Credentials!`,
      placement,
    });
  };

  const handleChange = (attr) => (e) => {
    setUser(prevState => ({
      ...prevState,
      [attr]: e.target.value,
    }))
  }

  const handleSignIn = (event) => {
    event.preventDefault();

    axios.post(SERVER_BASE_URL + 'api/auth/login', {
      userName: user.userName,
      password: user.password,
    }).then((res) => {
      window.localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    }).catch((error) => {
      openNotification('bottomRight');
    });
  }

  return (
    <Routes>
      <Route path='/' element={<SignIn handleChange={handleChange} handleSignIn={handleSignIn}/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
  );
};

export default App;