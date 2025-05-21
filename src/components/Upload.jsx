import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={"xl"} h={"100vh"}>
        <VStack color={"purple.500"} h={"full"} justifyContent={"center"} >
            <AiOutlineCloudUpload size={"10vmax"}/>

            <form>
                <HStack>
                    <Input type="file" required css={{
                        "&::file-selector-button":{
                            border: "none",
                            width: "calc(100% + 36px)",
                            height: "100%",
                            marginLeft: "-18px",
                            color: "purple",
                            backgroundColor: "white",
                            cursor: "pointer"
                        }
                        }}/>
                    <Button colorPalette={"purple"}>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload