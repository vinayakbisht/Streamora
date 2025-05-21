import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3 (1).jpg"
import img4 from "../assets/4 (1).jpg"
import img5 from "../assets/5.png"


const headingOptions = {
  pos: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"5xl"} minH={"100vh"} padding={"16"}>
        <Heading textTransform={"uppercase"} w={"fit-content"} py={"4"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>

        <Stack direction={["column", "row"]} alignItems={"center"} p={"4"}>
          <Image src={img5} h={["48", "xs"]} filter={"hue-rotate(-130deg)"} />
          <Text letterSpacing={'widest'} lineHeight={"150%"} p={["4", "16"]} textAlign={"center"}>
            At Streamora, we make it easy for you to enjoy and share video content.Here’s what you can do: <br/>
              Stream a wide range of videos directly in your browser — no downloads needed. <br/>
              Share your own videos with the world using our simple upload feature. <br/>
              Create an account or log in to personalize your streaming experience. <br/> 
              Enjoy a smooth and responsive experience whether you're on mobile, tablet, or desktop.
     
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel = () => {

  return (
    <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false}>

      <Box w={"full"} h={"100vh"}>
        <Image src={img1} alt="img" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >Watch the Future</Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img2} alt="img" />
        <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}  >Future is Gaming</Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img3} alt="img" />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}  >Gaming on Console</Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img4} alt="img" />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}  >Night life is cool</Heading>
      </Box>

    </Carousel>
  )
}
export default Home