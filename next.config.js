const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/shengcang/**',
      },
      {
        protocol: 'http',
        hostname: 'images.yungouos.com',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api-server/:path*',
        destination: 'http://localhost:13200/api-server/:path*', // 这里替换为你的目标 API 服务器
      },
    ];
  },
};
