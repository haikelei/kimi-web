import React from 'react';
import { Container } from '@/components/Container';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-primary bg-opacity-20 rounded-full p-4 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export const Features = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: '特价票源',
      description: '高达50%的正价票折扣',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: '高价值服务',
      description: '从订票到登机，全程贴心服务。',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: '优质航线',
      description: '覆盖全球中远程航班，随心飞行。',
    },
  ];

  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </Container>
  );
};
