import { Avatar, Container, Heading,Input,VStack, Button, AvatarIcon,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
    return (
        <Container maxW={"xl"} h={"100vh"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} w={["full", "96"]} gap={"8"} m={"auto"} my={"16"}>
                    <Heading size={"3xl"}>Streamora</Heading>
                    <Avatar.Root size={"2xl"} alignSelf={"center"} h={"24"} w={"24"}>
                        <AvatarIcon h={"16"} w={"16"}/>
                    </Avatar.Root>

                    <Input placeholder={'Enter Name'} required focusRingColor={"purple.500"} />
                    <Input type={"email"} placeholder={'Enter Email'} required focusRingColor={"purple.500"} />
                    <Input type={"password"} placeholder={'Enter password'} required focusRingColor={"purple.500"} />
                    <Button colorPalette={"purple"} type={"submit"}>Sign Up</Button>
                    <Text textAlign={"right"}>Already a User? {"   " }   <Button as={Link} to={"/login"} variant={"plain"} colorPalette={"purple"}>Log In</Button></Text>
                </VStack>

            </form>
        </Container>
    )
}

export default Signup