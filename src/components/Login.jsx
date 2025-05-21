import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <Container maxW={"xl"} h={"100vh"} p={"16"}>
        <form >
            <VStack alignItems={"stretch"} gap={"8"} m={"auto"} my={"16"} w={["full","96"]}>
                <Heading size={"3xl"}>Welcome Back</Heading>
                <Input type={"email"} placeholder={'Enter Email'} required focusRingColor={"purple.500"}/>
                <Input type={"password"} placeholder={'Enter password'} required focusRingColor={"purple.500"}/>
                <Button as={Link} to={"/forgetPassword"} variant={"ghost"} colorPalette={"purple"} alignSelf={"flex-end"}>Forget Password ?</Button>
                <Button colorPalette={"purple"} type={"submit"}>Log In</Button>
                <Text textAlign={"right"}>New User? {"   " }   <Button as={Link} to={"/signup"} variant={"plain"} colorPalette={"purple"}>Sign Up</Button></Text>
              
            </VStack>
        </form>
    </Container>
  )
}

export default Login