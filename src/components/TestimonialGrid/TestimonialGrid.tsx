import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Avatar,
} from '@chakra-ui/react';

const TestimonialCard = ({ content, name, username, avatarSrc }) => (
  <Box
    bg="white"
    boxShadow="sm"
    borderRadius="lg"
    p={6}
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
    border="1px solid"
    borderColor="gray.100"
    backgroundColor="gray.50"
  >
    <VStack align="start" spacing={4}>
      <Text fontSize="sm" color="gray.600">
        {content}
      </Text>
      <HStack spacing={3}>
        <Avatar size="sm" name={name} src={avatarSrc} />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold" fontSize="sm">
            {name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {username}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  </Box>
);

export const TestimonialGrid = () => {
  const testimonials = [
    {
      content: '升舱的商务舱服务让我在长途飞行中享受到了前所未有的舒适和豪华。',
      name: '王先生',
      username: '@wang',
      avatarSrc: `https://ui-avatars.com/api/?name=王先生&background=random`,
    },
    {
      content: '从预订到登机，升舱的每一个细节都体现了高端服务的专业和用心。',
      name: '李小姐',
      username: '@li',
      avatarSrc: `https://ui-avatars.com/api/?name=李小姐&background=random`,
    },
    {
      content:
        '升舱的商务舱不仅价格优惠，还提供了极致的飞行体验，绝对物超所值。',
      name: '张先生',
      username: '@zhang',
      avatarSrc: `https://ui-avatars.com/api/?name=张先生&background=random`,
    },
    {
      content: '选择升舱，让我在每次商务旅行中都能享受到顶级的舒适和服务。',
      name: '陈女士',
      username: '@chen',
      avatarSrc: `https://ui-avatars.com/api/?name=陈女士&background=random`,
    },
    {
      content: '升舱的商务舱服务让我感受到了真正的尊贵体验，强烈推荐。',
      name: '刘先生',
      username: '@liu',
      avatarSrc: `https://ui-avatars.com/api/?name=刘先生&background=random`,
    },
    {
      content: '在升舱的帮助下，我的每一次飞行都变得更加愉快和轻松。',
      name: '赵小姐',
      username: '@zhao',
      avatarSrc: `https://ui-avatars.com/api/?name=赵小姐&background=random`,
    },
    {
      content: '升舱的专业服务和豪华体验让我每次出行都充满期待。',
      name: '孙先生',
      username: '@sun',
      avatarSrc: `https://ui-avatars.com/api/?name=孙先生&background=random`,
    },
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h2" size="xl" color="blue.600">
              提升信任感，选择升舱
            </Heading>
            <Heading as="h3" size="lg" fontWeight="medium" color="gray.700">
              真实客户的豪华体验分享
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={8}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
