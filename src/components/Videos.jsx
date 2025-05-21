import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

  const videoArr = ["https://cdn.pixabay.com/video/2022/06/01/118970-716243149_large.mp4", "https://cdn.pixabay.com/video/2023/04/07/157865-815765546_tiny.mp4", "https://cdn.pixabay.com/video/2024/01/20/197491-905015035_tiny.mp4", "https://cdn.pixabay.com/video/2023/09/11/180074-863401733_tiny.mp4", "https://cdn.pixabay.com/video/2018/02/10/14244-255658092_tiny.mp4", "https://cdn.pixabay.com/video/2023/06/27/169027-840229965_tiny.mp4", "https://cdn.pixabay.com/video/2021/07/09/80796-573496253_tiny.mp4"];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  return (
    <Stack direction={["column", "row"]} h={"100vh"} >
      <VStack w={"full"}>
        <video controls controlsList='nodownload' src={videoSrc} style={{ width: "100%" }}></video>
        <VStack alignItems={"flex-start"} w={"full"} p={"8"} overflowY={"auto"}>
          <Heading size={"2xl"}>Sample Video</Heading>
          <Text>This is a Sample Video for Testing and Demo.
          </Text>
        </VStack>
      </VStack>
      <VStack w={["full", "xl"]} alignItems={"stretch"} p={"12"} gap={"8"} overflowY={"auto"}>
        {
          videoArr.map((src, index) => (
            <Button onClick={() => setVideoSrc(src)} key={index} variant={"ghost"} colorPalette={"purple"}>Lecture {index+1}</Button>
          ))
        }

      </VStack>
    </Stack>
  )
}

export default Videos