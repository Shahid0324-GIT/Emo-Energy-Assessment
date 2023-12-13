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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useNavigate();

  const submitHandler = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      toast({
        title: "Password do not match",
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
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });

      localStorage.setItem("user", JSON.stringify(data));
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
      {/* Name Input Field */}
      <FormControl style={{ color: "white" }} id="firstName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          variant={"outline"}
        />
      </FormControl>

      {/* E-Mail Input Field */}
      <FormControl style={{ color: "white" }} id="emailSignUp" isRequired>
        <FormLabel>E-Mail</FormLabel>
        <Input
          placeholder="Enter Your E-Mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          variant={"outline"}
        />
      </FormControl>

      {/* Password Input Field */}
      <FormControl style={{ color: "white" }} id="passwordSignUp" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup width={"100%"}>
          <Input
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={show ? "text" : "password"}
            variant={"outline"}
          />

          <InputRightAddon>
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>

      {/* Confirm Password Input Field */}
      <FormControl style={{ color: "white" }} id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup width={"100%"}>
          <Input
            placeholder="Confirm Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type={showConfirm ? "text" : "password"}
            variant={"outline"}
          />

          <InputRightAddon>
            <Button
              h={"1.75rem"}
              size={"sm"}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
