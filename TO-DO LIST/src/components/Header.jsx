import React from "react";
import ColorModeSwitcher from "../ColorModeSwitcher";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";

const Header = () => {
  return (
    <Box css={{ boxShadow: "0 0 2px" }} w={"100%"} maxH={"100%"}>
      <HStack>
        <ColorModeSwitcher />

        <Link to={"/"}>
          <Button>
            <AiFillHome />
          </Button>
        </Link>

        <Link to={"/todoapp"}>
          <Button>
            <BsListTask />
          </Button>
        </Link>

        <Heading
          fontFamily={"cursive"}
          textTransform={"uppercase"}
          p={"4"}
          fontSize={["xs", "xl"]}
          children="To Do List Web App"
        />
      </HStack>
    </Box>
  );
};

export default Header;
