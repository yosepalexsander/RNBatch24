import React from "react";
import {
  Heading,
  Button,
  HStack,
  Avatar,
  Center,
  useColorMode,
  useColorModeValue,
} from "native-base";

function ComponentWithColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Heading>I'm Heading</Heading>
      <Button
        colorScheme={colorMode === "light" ? "blue" : "red"}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change Theme
      </Button>
      <HStack space={3} mt={3}>
        <Avatar
          name="Selena"
          borderWidth={2}
          source={{
            uri: "http://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          }}
        />
        <Avatar
          name="Jhon"
          borderWidth={2}
          source={{
            uri: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        />
      </HStack>
    </>
  );
}

const LocalWrapper = ({ children }) => {
  const bg = useColorModeValue("gray.200", "gray.800");
  return (
    <Center flex={1} bg={bg} width="100%">
      {children}
    </Center>
  );
};

export default function Theme() {
  return (
    <LocalWrapper>
      <ComponentWithColorMode />
    </LocalWrapper>
  );
}
