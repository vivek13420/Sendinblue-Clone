import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [data, setData] = useState({ email: "", password: "", userName: "" });
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleClick = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/register", data);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <Container>
      <FormControl>
        <FormLabel>UserName</FormLabel>
        <Input
          onChange={handleChange}
          isRequired="required"
          name="userName"
          type="text"
          variant="filled"
          placeholder="userName"
        ></Input>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          onChange={handleChange}
          name="email"
          type="email"
          variant="filled"
          placeholder="email"
        ></Input>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          onChange={handleChange}
          name="password"
          type="password"
          variant="filled"
          placeholder="password"
        ></Input>
      </FormControl>
      <Button onClick={handleClick}>Submit</Button>
      {error && <Text>Something went wrong</Text>}
    </Container>
  );
};

export default SignupPage;
