import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const PhoneIcon = dynamic(() =>
  import('react-icons/fa').then((mod) => mod.FaPhone),
);
const WechatIcon = dynamic(() =>
  import('react-icons/fa').then((mod) => mod.FaWeixin),
);
const EmailIcon = dynamic(() =>
  import('react-icons/fa').then((mod) => mod.FaEnvelope),
);

export const Contact = () => {
  return (
    <Box className="bg-primary text-white" pl={16} py={16}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="flex-start">
          <VStack spacing={8} align="flex-start" flex={1}>
            <Text fontSize="sm" color="text">
              联系我们
            </Text>
            <Heading as="h2" size="2xl" mb={4} color="background">
              有合作意向？
            </Heading>
            <Text fontSize="md" color="text">
              如果您有优质商务舱机票资源，
              <br />
              欢迎联系我们。
            </Text>
          </VStack>

          <Spacer />

          <VStack
            spacing={8}
            align="flex-start"
            flex={1}
            mt={{ base: 8, md: 0 }}
          >
            <Text fontSize="sm" color="text">
              发送消息
            </Text>
            <VStack spacing={4} align="flex-start">
              <HStack spacing={3}>
                <PhoneIcon color="accent" />
                <Link href="tel:18357040465" color="background">
                  18357040465
                </Link>
              </HStack>
              <HStack spacing={3}>
                <WechatIcon color="accent" />
                <Text color="background">haikelei</Text>
              </HStack>
              <HStack spacing={3}>
                <EmailIcon color="accent" />
                <Link href="mailto:lujialei08@gmail.com" color="background">
                  lujialei08@gmail.com
                </Link>
              </HStack>
            </VStack>

            <VStack spacing={4} align="flex-start" mt={8}>
              <Text fontSize="sm" color="text">
                FOLLOW US
              </Text>
              <HStack spacing={4}>
                <Link href="#" fontSize="sm" color="secondary">
                  微信
                </Link>
                <Link href="#" fontSize="sm" color="background">
                  微博
                </Link>
                <Link href="#" fontSize="sm" color="background">
                  LinkedIn
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};
