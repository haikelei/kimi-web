import React, { useState } from 'react';
import { Box, Image, Skeleton, Text } from '@chakra-ui/react';

const LoadingImage = ({
  src,
  alt,
  width = 200,
  height = 200,
  loadingText = '加载中...',
  borderRadius = 'lg',
  opacity = 1,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box position="relative" width={`${width}px`} height={`${height}px`}>
      <Skeleton
        isLoaded={!isLoading}
        fadeDuration={1}
        borderRadius={borderRadius}
        width={`${width}px`}
        height={`${height}px`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          borderRadius={borderRadius}
          opacity={opacity}
          onLoad={() => setIsLoading(false)}
          fallback={
            <Box
              width={`${width}px`}
              height={`${height}px`}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.100"
              borderRadius={borderRadius}
            >
              <Text fontSize="sm" color="gray.500">
                {loadingText}
              </Text>
            </Box>
          }
          {...props}
        />
      </Skeleton>
    </Box>
  );
};

export default LoadingImage;
