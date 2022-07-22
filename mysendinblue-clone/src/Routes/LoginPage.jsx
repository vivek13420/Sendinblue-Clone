import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LoginPage = () => {
    const value = useContext(AuthContext)
    console.log(value)
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false)
  let navigate  = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleClick = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/login", data);
      console.log(res.data);
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };
  return (
    <Container>
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
      <Button onClick={handleClick}>Submit</Button>
      {error && <Text>Something went wrong</Text> }
    </Container>
  );
};

export default LoginPage;