import Login from "./Login";
import Signup from "./SignUp";

import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { containerProps, boxProps, textProps, formBox } from "./styles";

const HomePage = () => {
  return (
    <Container {...containerProps}>
      <Box {...boxProps}>
        <Text {...textProps}>Emo. Energy</Text>
      </Box>
      <Box {...formBox}>
        <Tabs variant="solid-rounded">
          <TabList mb="1em">
            <Tab color={"white"} width="50%">
              Login
            </Tab>
            <Tab color={"white"} width="50%">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
