'use client';
import { Container } from '@/components/Container';
import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import Image from 'next/image';

export default function Feeds() {
  return (
    <Container className={'flex justify-center items-center w-7/12'}>
      <Box className="p-8">
        <Box mb={16} className="flex flex-col items-center">
          <Heading as="h2" size="lg" mb={4} className="text-gray-800">
            我们是谁
          </Heading>
          <div className="w-56 h-1 bg-neutral-400 mb-12"></div>
          <Box className="w-max-[1280px] bg-blue-500 rounded-lg text-white p-8 mb-12">
            <Text className="">
              我们是一家专注于洲际航线商务舱机票的票务代理机构，我们的团队由多年行业经验的航空票务专家和热衷技术分享的工程师组成。
            </Text>
          </Box>
          <Image
            src="https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/shengcang/WorldMap.png"
            alt={'map'}
            layout="responsive"
            width={16}
            height={9}
            scale="cover"
          />
        </Box>

        <Box className="flex flex-col">
          <Heading as="h2" size="lg" mb={4} className="text-gray-800">
            我们的<span className="text-blue-600">使命</span>
          </Heading>
          <div className="w-96 h-1 bg-neutral-400 mb-12"></div>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold">最佳价格保证：</Text>
            </div>
            <div className="flex-1">
              <Text>我们承诺以最优惠的价格为客户提供高价值的商务舱机票。</Text>
            </div>
          </Flex>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold ">极致客户服务：</Text>
            </div>
            <div className="flex-1">
              <Text>我们的专业客服团队随时为客户提供快速的客户支持。</Text>
            </div>
          </Flex>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold ">透明交易过程：</Text>
            </div>
            <div className="flex-1">
              <Text>我们保证每一笔交易的透明度和安全性。。</Text>
            </div>
          </Flex>
        </Box>

        <Box className="flex flex-col mt-24">
          <Heading as="h2" size="lg" mb={4} className="text-gray-800">
            我们的<span className="text-blue-600">承诺</span>
          </Heading>
          <div className="w-96 h-1 bg-neutral-400 mb-12"></div>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold">服务高可用：</Text>
            </div>
            <div className="flex-1">
              <Text>
                客户支付下单后，我们将尽快确认出票状态，并确保所有机票与从官方网站购买的机票在使用上没有任何区别
              </Text>
            </div>
          </Flex>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold ">机票包风险：</Text>
            </div>
            <div className="flex-1">
              <Text>
                如意外出现机票不可用的情况，我们会为您第一时间办理退款或者补票流程。不需要您承担任何额外费用。
              </Text>
            </div>
          </Flex>
          <Flex className="mb-4">
            <div className="w-32">
              <Text className="font-bold ">透明交易过程：</Text>
            </div>
            <div className="flex-1">
              <Text>我们保证每一笔交易的透明度和安全性。</Text>
            </div>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
