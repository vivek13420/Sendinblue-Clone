import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import home_video from "../assets/home_video.mp4"
import "../App.css";


const MiddlePart = () => {
  return (
    <Flex pl="5rem" py="2rem" >
      <Box width="50%">
        <Heading mb="3rem" color="rgb(9,30,63)" size="4xl">
          Prepare for <br></br> takeoff.
        </Heading>
        <Box maxW="29rem">
          <Text color="gray.500" fontSize="xl" fontWeight="medium" mb="3rem">
            Sendinblue is the smartest and most intuitive platform for growing
            businesses. Thrive digitally as we guide your business with the
            right marketing & sales tools.
          </Text>
        </Box>
        <Button
          fontSize="lg"
          borderRadius="300"
          color="white"
          p="2rem"
          bg="rgb(0,146,255)"
          variant="solid"
        >
          Take a free test drive!
        </Button>
      </Box>
      <Box  >
        <video width="100%" src={home_video} autoPlay loop muted />
      </Box>
    </Flex>
  );
};

export default MiddlePart;
