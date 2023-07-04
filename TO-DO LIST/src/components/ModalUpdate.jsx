import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../Redux/createSlice";

const ModalUpdate = ({ isOpen, onClose, taskIndex }) => {
  const taskList = useSelector((state) => state.taskReducer.taskList);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const updateHAndler = (e) => {
    e.preventDefault();
    const data = {
      id: taskList[taskIndex].id,
      taskTitle: taskTitle,
      description: description,
      iscompleted: false,
    };
    dispatch(updateTask({ data, taskIndex }));
    setTaskTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTaskTitle(taskList[taskIndex].taskTitle);
    setDescription(taskList[taskIndex].description);
  }, [taskList, taskIndex]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>UPDATE TASK</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            {taskList && (
              <form style={{ width: "100%" }} onSubmit={updateHAndler}>
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
                <Button
                  my={4}
                  onClick={onClose}
                  colorScheme="purple"
                  type="submit"
                >
                  <BiMessageSquareEdit /> UPDATE
                </Button>
              </form>
            )}
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr={"3"} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdate;
