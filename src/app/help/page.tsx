'use client';
import { Container } from '@/components/Container';
import { Box, Heading, List, ListItem, Text, Icon } from '@chakra-ui/react';
import {
  FaPlane,
  FaShieldAlt,
  FaPiggyBank,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Feeds() {
  return (
    <Container className="py-10 bg-background">
      <Box className="max-w-3xl mx-auto">
        <Heading as="h1" size="xl" className="text-primary text-center mb-10">
          常见问题
        </Heading>

        <Box className="space-y-6">
          <FaqItem
            icon={FaPlane}
            title="我们的机票信息从哪里来？"
            content="我们团队拥有多年航空里程兑换经验，从高端商务旅客处收购大量航空积分。通过航空公司内部渠道，我们将这些积分兑换成正常的商务舱机票，从而为客户提供最具性价比的选择。"
          />

          <FaqItem
            icon={FaShieldAlt}
            title="机票是否有保障？"
            content="当您支付订单后，我们会在24小时内确认出票状态。出票成功后，这些机票与官方网站购买的机票完全相同，您可以放心享受同等的商务舱体验和服务。"
          />

          <FaqItem
            icon={FaPiggyBank}
            title="为什么我们的机票更便宜？"
            content="我们通过收购高端旅客的航空积分并利用内部渠道兑换，降低了获取机票的成本。这种创新模式使我们能够为客户提供更具竞争力的价格，同时保证相同的高品质服务。"
          />
        </Box>

        <Box className="mt-8 bg-white shadow-lg rounded-xl p-6">
          <Heading as="h2" size="lg" className="text-primary mb-4">
            简单四步，轻松购票
          </Heading>
          <List className="space-y-3">
            {[
              '搜索并选择理想航班',
              '确认订单并完成支付',
              '等待平台审核和出票（1个工作日内）',
              '接收确认邮件和短信',
            ].map((step, index) => (
              <ListItem
                key={index}
                className="flex items-center text-text text-sm"
              >
                <Icon
                  as={FaCheckCircle}
                  className="text-success mr-2 text-base"
                />
                <Text>{step}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}

const FaqItem = ({ icon, title, content }) => (
  <Box className="bg-white shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-xl">
    <Heading as="h2" size="md" className="flex items-center text-primary mb-3">
      <Icon as={icon} className="mr-2 text-secondary text-xl" />
      {title}
    </Heading>
    <Text className="text-text text-sm">{content}</Text>
  </Box>
);
