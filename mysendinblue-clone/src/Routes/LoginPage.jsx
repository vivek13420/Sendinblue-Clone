import { Box, Button, Container, Heading, Input, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LoginPage = () => {
    const value = useContext(AuthContext)
    console.log(value)
    const error= value.error
  const [data, setData] = useState({ email: "", password: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
 
  return (
    <Container>
        <Heading m="2rem" >Login page</Heading>
        
      <Input
        onChange={handleChange}
        name="email"
        type="email"
        variant="filled"
        placeholder="email"
      ></Input>
      <Input
        onChange={handleChange}
        name="password"
        type="password"
        variant="filled"
        placeholder="password"
      ></Input>
      <Button onClick={()=>value.handleSubmit(data)}>Submit</Button>
      {error && <Text>Something went wrong</Text> }
    </Container>
  );
};

export default LoginPage;
