import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const DynamicIcon = dynamic(
  () => import('react-icons/fa').then((mod) => mod.FaTwitter),
  { ssr: false },
);

const socialIcons = [
  { icon: 'FaTwitter', label: 'Twitter' },
  { icon: 'FaFacebook', label: 'Facebook' },
  { icon: 'FaInstagram', label: 'Instagram' },
  { icon: 'FaLinkedin', label: 'LinkedIn' },
];

export function Footer() {
  const navigation = ['产品', '机票', '升舱', '酒店优惠'];
  const legal = ['用户条款', '用户隐私', '内容声明'];

  return (
    <Box as="footer" bg="gray.50" color="gray.700" py={8} pl={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="xl" fontWeight="bold" color="primary">
              升舱网
            </Text>
            <Text fontSize="sm">
              为您提供优质的
              <br />
              商务舱订票服务。
            </Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>
              产品导航
            </Text>
            {navigation.map((item) => (
              <Link
                key={item}
                href="#"
                color="gray.500"
                fontSize="sm"
                _hover={{ color: 'primary' }}
              >
                {item}
              </Link>
            ))}
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>
              法律信息
            </Text>
            {legal.map((item) => (
              <Link
                key={item}
                href="#"
                color="gray.500"
                fontSize="sm"
                _hover={{ color: 'primary' }}
              >
                {item}
              </Link>
            ))}
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>
              关注我们
            </Text>
            <Stack direction="row" spacing={4}>
              {socialIcons.map(({ icon, label }) => (
                <SocialIcon key={label} icon={icon} label={label} />
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
        <Box
          borderTopWidth={1}
          borderColor="gray.200"
          pt={8}
          mt={8}
          textAlign="center"
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} 升舱网. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const SocialIcon = ({ icon, label }) => {
  const IconComponent = dynamic(
    () => import('react-icons/fa').then((mod) => mod[icon]),
    { ssr: false },
  );

  return (
    <Link href="#" color="gray.400" _hover={{ color: 'primary' }}>
      <IconComponent aria-label={label} />
    </Link>
  );
};
