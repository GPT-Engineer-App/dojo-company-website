import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem, Image, Icon } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const WorkStandards = () => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={20}>
      <Heading mb={10}>도장 작업표준서</Heading>
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          1. 표면 처리
        </Heading>
        <Image src="https://example.com/surface-preparation.jpg" alt="표면 처리" mb={4} />
        <UnorderedList>
          <ListItem>도장 표면의 오염물질을 제거하고 매끄럽게 연마합니다.</ListItem>
          <ListItem>표면의 결함을 보수하고 평활도를 확인합니다.</ListItem>
        </UnorderedList>
      </Box>
      <Icon as={FaArrowDown} w={8} h={8} color="blue.500" mx="auto" mb={8} />
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          2. 도장 준비
        </Heading>
        <Image src="https://example.com/painting-preparation.jpg" alt="도장 준비" mb={4} />
        <UnorderedList>
          <ListItem>도료의 점도와 균일성을 확인합니다.</ListItem>
          <ListItem>도장 장비를 점검하고 도장 조건을 설정합니다.</ListItem>
        </UnorderedList>
      </Box>
      <Icon as={FaArrowDown} w={8} h={8} color="blue.500" mx="auto" mb={8} />
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          3. 도장 작업
        </Heading>
        <Image src="https://example.com/painting-process.jpg" alt="도장 작업" mb={4} />
        <UnorderedList>
          <ListItem>프라이머를 균일하게 도포합니다.</ListItem>
          <ListItem>중도와 상도를 일정한 두께로 도장합니다.</ListItem>
          <ListItem>도막 두께와 외관 상태를 검사합니다.</ListItem>
        </UnorderedList>
      </Box>
      <Icon as={FaArrowDown} w={8} h={8} color="blue.500" mx="auto" mb={8} />
      <Box>
        <Heading size="lg" mb={4}>
          4. 마무리 작업
        </Heading>
        <Image src="https://example.com/finishing-work.jpg" alt="마무리 작업" mb={4} />
        <UnorderedList>
          <ListItem>도장면의 오염물질을 제거하고 청소합니다.</ListItem>
          <ListItem>도장 장비를 세척하고 관리합니다.</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default WorkStandards;
