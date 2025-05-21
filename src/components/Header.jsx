import React, { useState } from 'react'
import { Button, CloseButton, Drawer,Portal, VStack} from "@chakra-ui/react"
import { Link } from 'react-router'
import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement={"start"}>
        <Drawer.Trigger asChild>
          <Button pos={"fixed"} top={"4"} left={"4"} colorPalette={"purple"} padding={"0"} w={"10"} h={"10"} borderRadius={"full"} zIndex={"100"}>
            <BiMenuAltLeft size={"20"} />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>

              <Drawer.Header>
                <Drawer.Title fontSize={["xl","2xl"]}>Streamora</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="xl" />
                </Drawer.CloseTrigger>
              </Drawer.Header>

              <Drawer.Body>
                <VStack alignItems={'flex-start'}>
                  <Button onClick={() => setOpen(false)} colorPalette={"purple"} as={Link} to={"/"} variant={"ghost"} size={["xl","2xl"]}>
                    Home
                  </Button>

                  <Button onClick={() => setOpen(false)} colorPalette={"purple"} as={Link} to={"/videos"} variant={"ghost"} size={["xl","2xl"]}>
                    Videos
                  </Button>

                  <Button onClick={() => setOpen(false)} colorPalette={"purple"} as={Link} to={"/videos?category=free"} variant={"ghost"} size={["xl","2xl"]}>
                    Free Videos
                  </Button>

                  <Button onClick={() => setOpen(false)} colorPalette={"purple"} as={Link} to={"/upload"} variant={"ghost"} size={["xl","2xl"]}>
                    Upload Video
                  </Button>
                </VStack>

              </Drawer.Body>

              <Drawer.Footer justifyContent={"space-evenly"}>
                <Button onClick={() => setOpen(false)} colorPalette={"purple"} as={Link} to={"/login"} size={["xl","2xl"]}>
                  Login
                </Button>

                <Button onClick={() => setOpen(false)} variant={"outline"} colorPalette={"purple"} as={Link} to={"/signup"} size={["xl","2xl"]}>
                  Sign Up
                </Button>
              </Drawer.Footer>

            </Drawer.Content>
          </Drawer.Positioner>

        </Portal>
      </Drawer.Root>
    </>
  )
}

export default Header