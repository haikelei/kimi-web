import Image from 'next/image';
// 获取basePath

const CustomImage = ({ src, ...props }) => {
  // 获取 basePath
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

  // 检查 src 是否是以 '/' 开头的相对路径
  if (src.startsWith('/')) {
    // 在前面拼接 basePath
    src = `${basePath}${src}`;
  }

  // 返回修改后的 Image 组件
  return <Image src={src} {...props} alt={'image'} />;
};

export default CustomImage;
