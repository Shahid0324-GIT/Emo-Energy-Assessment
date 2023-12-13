import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the details",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: "application/json",
      };

      const { data } = axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history("/loggedin");
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });

      setLoading(false);
    }
  };

  return (
    <VStack spacing="0.35rem" color={"black"}>
      {/* E-Mail Input Field */}
      <FormControl id="email" isRequired>
        <FormLabel style={{ color: "white" }}>E-Mail</FormLabel>
        <Input
          variant={"filled"}
          placeholder="Enter Your E-Mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
      </FormControl>

      {/* Password Input Field */}
      <FormControl id="password" isRequired>
        <FormLabel style={{ color: "white" }}>Password</FormLabel>
        <InputGroup width={"100%"}>
          <Input
            variant={"filled"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={show ? "text" : "password"}
          />

          <InputRightAddon>
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        variant={"solid"}
        width={"100%"}
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Log In
      </Button>

      <Button
        variant={"solid"}
        bgColor="#800080"
        color={"White"}
        width={"100%"}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
        _hover={{ bg: "#800090" }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
