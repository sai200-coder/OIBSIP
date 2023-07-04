import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/createSlice";
import { nanoid } from "nanoid";

const TodoListForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const saveTaskHandler = (e) => {
    e.preventDefault();
    const data = {
      id: nanoid(10),
      taskTitle: taskTitle,
      description: description,
      iscompleted: false,
    };
    dispatch(addTask(data));
    setTaskTitle("");
    setDescription("");
  };

  return (
    <Container>
      <VStack padding={"4"}>
        <Heading fontSize={["xl","2xl"]} textTransform={"uppercase"} children="Create New Task" />
        <form style={{ width: "100%" }} onSubmit={saveTaskHandler}>
          <Box my={"4"}>
            <FormLabel htmlFor="task" children="Task" />
            <Input
              required
              id="task"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="xyz"
              type="text"
              focusBorderColor="purple.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="description" children="Description" />
            <Textarea
              required
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your Description Here...."
              focusBorderColor="purple.500"
            />
          </Box>
          <Button my={4} colorScheme="purple" type="submit">
            <MdAddToPhotos /> ADD TASK
          </Button>
        </form>
      </VStack>
    </Container>
  );
};

export default TodoListForm;
