import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import TodoListForm from "./TodoListForm";
import TodoListTask from "./TodoListTask";
import { useSelector } from "react-redux";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import MetaData from "./MetaData";

const Todoapp = () => {
  const taskList = useSelector((state) => state.taskReducer.taskList);
  return (
    <Container
      maxW={"100%"}
      h={"90vh"}
      display={"grid"}
      gridTemplateColumns={["1fr", "1fr 2fr"]}
    >
      <MetaData title={"TASK LIST"} />
      <TodoListForm />
      {taskList.length === 0 ? (
        <>
          <Heading
            fontFamily={"cursive"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={"8"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            <GiEmptyMetalBucketHandle />
            No Task Yet
          </Heading>
        </>
      ) : (
        <TodoListTask />
      )}
    </Container>
  );
};

export default Todoapp;
