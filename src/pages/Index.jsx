import React from "react";
import { Box, Heading, Text, Image, Button, Flex, Stack, SimpleGrid } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGNvbXBhbnklMjBoZXJvJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTI4MDA4NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" py={40}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            전문 도장 서비스
          </Heading>
          <Text fontSize="xl" color="white">
            최고의 기술력과 노하우로 고객 만족을 추구합니다.
          </Text>
          <Button colorScheme="blue" size="lg" mt={8}>
            문의하기
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box maxW="6xl" mx="auto" px={4} py={20}>
        <Heading textAlign="center" mb={10}>
          서비스 소개
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nfGVufDB8fHx8MTcxMjgwMDg3Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Interior Painting" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              실내 도장
            </Heading>
            <Text>아파트, 주택, 사무실 등 실내 공간을 아름답게 도장해 드립니다.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1705589385090-d958e833a73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMHBhaW50aW5nfGVufDB8fHx8MTcxMjgwMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Exterior Painting" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              실외 도장
            </Heading>
            <Text>건물 외벽, 담장, 지붕 등 실외 공간을 전문적으로 도장합니다.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1650562373852-04c5682ec2e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbG9vciUyMGNvYXRpbmd8ZW58MHx8fHwxNzEyODAwODc3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Floor Coating" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              바닥 코팅
            </Heading>
            <Text>에폭시, 우레탄 등 다양한 바닥재로 내구성 있는 마감을 해드립니다.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex flexWrap="wrap">
            <Box flex={["0 0 100%", null, "0 0 50%"]} pr={[0, null, 10]}>
              <Image src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGNvbXBhbnklMjB3b3JrZXJzfGVufDB8fHx8MTcxMjgwMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Painting Company" mb={[8, null, 0]} />
            </Box>
            <Box flex={["0 0 100%", null, "0 0 50%"]}>
              <Heading mb={4}>회사 소개</Heading>
              <Text mb={4}>○○도장은 20년 이상의 노하우와 최고의 기술진으로 고객 여러분께 최상의 도장 서비스를 제공하고 있습니다. 항상 고객 만족을 최우선으로 생각하며, 꼼꼼하고 섬세한 작업으로 신뢰받는 업체가 되겠습니다.</Text>
              <Text>도장 공사에 있어 어떤 것이라도 문의해 주시면 성심껏 상담해 드리겠습니다. 고객 한 분 한 분을 소중하게 여기며 정직하게 시공하는 ○○도장이 되겠습니다.</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading mb={4}>지금 바로 문의하세요!</Heading>
          <Text fontSize="xl" mb={8}>
            도장 공사에 대해 궁금하신 점이 있으시다면 언제든 연락 주세요. 신속하고 친절하게 상담해 드리겠습니다.
          </Text>
          <Stack direction={["column", null, "row"]} spacing={4} justifyContent="center">
            <Button leftIcon={<FaPhone />} colorScheme="blue" size="lg">
              전화 문의
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="green" size="lg">
              이메일 문의
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" py={10} color="white">
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box mb={[4, null, 0]}>
              <Heading size="md" mb={4}>
                ○○도장
              </Heading>
              <Text>
                <FaMapMarkerAlt /> 서울시 ○○구 ○○로 123
              </Text>
              <Text>
                <FaPhone /> 02-123-4567
              </Text>
              <Text>
                <FaEnvelope /> info@oopainting.com
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                메뉴
              </Heading>
              <Text>회사소개</Text>
              <Text>서비스</Text>
              <Text>문의하기</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
