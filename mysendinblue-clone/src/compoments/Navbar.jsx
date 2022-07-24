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
  Link,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
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
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link fontSize="lg" href="#">
              Solutions
            </Link>
          </PopoverTrigger>
          <PopoverContent boxShadow="lg">
            <PopoverArrow />
            <PopoverBody p="2rem">
              <Flex flexDirection="column">
                <Link href="#" mb="10px">
                  Why Sendinblue?
                </Link>
                <Spacer />
                <Link href="#">Enterprise</Link>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Link fontSize="lg" href="#">
          Pricing
        </Link>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link fontSize="lg" href="#">
              Features
            </Link>
          </PopoverTrigger>
          <PopoverContent width="500px" boxShadow="lg">
            <PopoverArrow />
            <PopoverBody p="2rem">
              <Flex>
                <Flex flexDirection="column">
                  <Spacer />
                  <Link as="" fontSize="lg" fontWeight="bold">
                    Communicate
                  </Link>
                  <Link as="" fontSize="md">
                    Email Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    Email API
                  </Link>
                  <Link as="" fontSize="md">
                    SMS Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    Chat
                  </Link>
                  <Link as="" fontSize="md">
                    Inbox
                  </Link>
                </Flex>
                <Spacer />
                <Spacer />
                <Divider variant="solid" orientation="vertical" />

                <Flex flexDirection="column">
                  <Link as="" fontSize="lg" fontWeight="bold">
                    Personalize
                  </Link>
                  <Link as="" fontSize="md">
                    Email Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    CRM
                  </Link>
                  <Link as="" fontSize="md">
                    CRM
                  </Link>
                </Flex>
                <Spacer />
                <Spacer />
                <Divider variant="solid" orientation="vertical" />
                <Flex flexDirection="column">
                  <Link as="" fontSize="lg" fontWeight="bold">
                    Convert
                  </Link>
                  <Link as="" fontSize="md">
                    SignUP Forms
                  </Link>
                  <Link as="" fontSize="md">
                    Landing Pages
                  </Link>
                  <Link as="" fontSize="md">
                    Facebook Ads
                  </Link>
                </Flex>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link fontSize="lg" href="#">
              Resources
            </Link>
          </PopoverTrigger>
          <PopoverContent boxShadow="lg">
            <PopoverArrow />
            <PopoverBody p="2rem">
              <Flex>
                <Flex flexDirection="column">
                  <Spacer />
                  <Link as="" fontSize="lg" fontWeight="bold">
                    Communicate
                  </Link>
                  <Link as="" fontSize="md">
                    Email Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    Email API
                  </Link>
                  <Link as="" fontSize="md">
                    SMS Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    Chat
                  </Link>
                  <Link as="" fontSize="md">
                    Inbox
                  </Link>
                </Flex>
                <Spacer />
                <Spacer />
                <Divider variant="solid" orientation="vertical" />

                <Flex flexDirection="column">
                  <Link as="" fontSize="lg" fontWeight="bold">
                    Personalize
                  </Link>
                  <Link as="" fontSize="md">
                    Email Marketing
                  </Link>
                  <Link as="" fontSize="md">
                    CRM
                  </Link>
                  <Link as="" fontSize="md">
                    CRM
                  </Link>
                </Flex>

                <Box></Box>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Link>Blog</Link>
        {/* <Link fontSize="lg">Solutions</Link>
        <Link fontSize="lg">Solutions</Link>
        <Link fontSize="lg">Solutions</Link>
        <Link fontSize="lg">Solutions</Link> */}
      </Flex>
      <Spacer />
      {isAuth ? (
         <Popover trigger="hover">
         <PopoverTrigger>
           <Link fontSize="lg" href="#">
             My Dashboard
           </Link>
         </PopoverTrigger>
         <PopoverContent boxShadow="lg">
           <PopoverArrow />
           <PopoverBody p="2rem">
             <Flex flexDirection="column">
               <Link onClick={toggleAuth} href="#" mb="10px">
                 Log Out
               </Link>
               <Spacer />
               
             </Flex>
           </PopoverBody>
         </PopoverContent>
       </Popover>
      ) : (
        <Flex alignItems="center" gap="1rem">
          <Link as={ReactLink} to="/login" fontWeight="bold">
            Log in
          </Link>
          <Button
            as={ReactLink}
            to="/signup"
            fontSize="lg"
            borderRadius="300"
            color="white"
            p="2rem"
            bg="rgb(0,146,255)"
            variant="solid"
          >
            Sign up free
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
