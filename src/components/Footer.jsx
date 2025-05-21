import { Box, Stack, VStack, Heading, HStack, Button, Input, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router'


const buttonOptions = {
 w:["10","12"],
 h:["10","12"],
 borderRadius:"full",
  _hover:{ colorPalette: "purple" },
}
const Footer = () => {

  return (
    <Box w={"100%"} minH={"52"} bgColor={"blackAlpha.900"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]} >
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>Subscribe to get updates</Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder='Enter Email Here...' border={"none"} outline={"none"} />
            <Button p={"0"} colorPalette={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
              <AiOutlineSend size={"20"} /></Button>
          </HStack>
        </VStack>

        <VStack w={"full"} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>
          <Heading textTransform={"uppercase"}>Streamora</Heading>
          <Text>@All rights resevered</Text>
        </VStack>

        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
          <HStack gapX={"4"} my={"4"}>

            <Button as={Link} to={"https://youtube.com"} {...buttonOptions}><AiFillYoutube /></Button>

            <Button as={Link} to={"https://instagram.com"} {...buttonOptions}><AiFillInstagram /></Button>
            <Button as={Link} to={"https://github.com"} {...buttonOptions}><AiFillGithub /></Button>
            <Button as={Link} to={"https://linkedin.com"} {...buttonOptions}><AiFillLinkedin /></Button>
          </HStack>

        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer