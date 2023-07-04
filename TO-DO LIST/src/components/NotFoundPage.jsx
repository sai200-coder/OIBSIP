import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { TbError404Off } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import MetaData from "./MetaData";

const NotFoundPage = () => {
  return (
    <Container maxW={"100%"} padding={"4"} overflowY={"auto"} h={"92vh"}>
         <MetaData title={"NOT FOUND 404"} />
      <Stack
        width={"100%"}
        height={"100%"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TbError404Off fontSize={"100"} />
        <Heading
          fontFamily={"cursive"}
          fontSize={["45", "50"]}
          textAlign={"center"}
          children="NOT FOUND PAGE"
        />
        <Link to={"/"}>
          <Button>
            <AiFillHome />
            Back To Home
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
