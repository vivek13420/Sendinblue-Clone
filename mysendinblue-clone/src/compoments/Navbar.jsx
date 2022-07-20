import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex px="5rem" py="2rem">
      <Image
        // border="1px "
        width="240px"
        src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
        alt="Dan Abramov"
      />
      <Spacer />
      <Flex gap="2rem" alignItems="center">
        <Popover trigger="hover" >
          <PopoverTrigger>
          <Text fontSize="lg">Solutions</Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody p="2rem" >
              <Text mb="10px" >Why Sendinblue?</Text>
              
              <Text>Enterprise</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        
        <Text fontSize="lg">Solutions</Text>
        <Text fontSize="lg">Solutions</Text>
        <Text fontSize="lg">Solutions</Text>
        <Text fontSize="lg">Solutions</Text>
      </Flex>
      <Spacer />
      <Flex alignItems="center">
        <Text>Login</Text>
        <Button>Sign up free</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
