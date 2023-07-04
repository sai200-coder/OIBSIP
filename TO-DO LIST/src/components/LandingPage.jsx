import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import MetaData from "./MetaData";

const LandingPage = () => {
  return (
    <Container maxW={"100%"} padding={"4"} overflowY={"auto"} h={"92vh"}>
      <MetaData title={"TO DO APP"} />
      <Stack
        width={"100%"}
        height={"100%"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image w={"100"} height={"48"} src={logo} />
        <Heading
          fontFamily={"cursive"}
          fontSize={["42", "50"]}
          textAlign={"center"}
          children="TO DO LIST WEB APPLICATION"
        />
        <Text fontFamily={"playFair"} fontSize={"xs"}>
          SAI MUKHESH - FULL STACK DEVELOPER
        </Text>
      </Stack>
    </Container>
  );
};

export default LandingPage;
