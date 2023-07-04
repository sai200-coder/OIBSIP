import {
  Button,
  Checkbox,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import ModalUpdate from "./ModalUpdate";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, isCompleted } from "../Redux/createSlice";

const TodoListTask = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [switchModal, setSwitchModal] = useState("");
  const [taskIndex, setTaskIndex] = useState("");
  const taskList = useSelector((state) => state.taskReducer.taskList);
  const dispatch = useDispatch();

  const switchhandler = (value, index) => {
    setSwitchModal(value);
    setTaskIndex(index);
    onOpen();
  };
  return (
    <Container padding={"4"} overflowY={"auto"} h={"100vh"}>
      <Heading
        fontSize={["xl", "2xl"]}
        mb={"8"}
        children="TASKS LIST"
        textAlign={"center"}
      />

      {taskList &&
        taskList.map((item, index) => {
          return (
            <VStack
              css={{ border: "1px solid ", boxShadow: "0 0 10px white" }}
              p={"5"}
              borderRadius={"4"}
              key={index}
            >
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                marginBottom={"10px"}
                fontSize={["xl", "2xl"]}
              >
                {item.taskTitle}
              </Text>
              <Text marginBottom={"10px"}>{item.description}</Text>
              <HStack
                justifyContent={["center", "flex-end"]}
                minH={"100%"}
                minW={"100%"}
              >
                <Button onClick={() => switchhandler(1, index)}>
                  <BiMessageSquareEdit color="green" fontSize={"25"} />
                </Button>
                <Button onClick={() => dispatch(deleteTask(item.id))}>
                  <AiFillDelete color="red" fontSize={"25"} />
                </Button>
                <Button>
                  <Checkbox
                    colorScheme="green"
                    defaultChecked={item.iscompleted}
                    onChange={() =>
                      dispatch(
                        isCompleted({
                          id: item.id,
                          taskIndex: index,
                          isCompleted: item.iscompleted,
                        })
                      )
                    }
                  ></Checkbox>
                </Button>
              </HStack>
            </VStack>
          );
        })}

      {switchModal === 1 && (
        <ModalUpdate taskIndex={taskIndex} isOpen={isOpen} onClose={onClose} />
      )}
    </Container>
  );
};

export default TodoListTask;
