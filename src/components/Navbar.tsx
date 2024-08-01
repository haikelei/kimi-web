'use client';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import CustomImage from '@/components/CustomImage';
import { useRouter, usePathname } from 'next/navigation';
import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  useToast,
  Avatar,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useAuthStore from '@/app/stores/authStore';
import { FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

// 隐藏中间四位手机号
const formatPhone = (phone) => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};

export const Navbar = () => {
  const navigation = [
    {
      name: '首页',
      href: '/',
    },
    {
      name: '商务舱',
      href: '/feeds',
    },
    {
      name: '酒店',
      href: '/hotels',
    },
    {
      name: '关于我们',
      href: '/about-us',
    },
    {
      name: '帮助',
      href: '/help',
    },
  ];

  const pathName = usePathname();
  const isActive = (href) => pathName === href;
  const hideNavbarPages = ['/login'];
  const shouldHideNavbar = hideNavbarPages.some((page) =>
    pathName.startsWith(page),
  );

  const router = useRouter();
  const toast = useToast();
  const onClickUserProfile = () => {
    toast({
      description: '用户信息',
    });
  };

  const onClickMyOrder = () => {
    router.push('/my-order');
  };

  const { user, isLoggedIn, updateUser, logout, goLoginPage } = useAuthStore();

  const onClickLogout = () => {
    logout();
    // 刷新页面
    window.location.reload();
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full shadow-md bg-primary">
      {!shouldHideNavbar && (
        <nav className="container relative flex flex-wrap items-center p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-white dark:text-gray-100">
                      <span>
                        <CustomImage
                          src="/img/apple-touch-icon.png"
                          alt="N"
                          width="32"
                          height="32"
                          className="w-8"
                        />
                      </span>
                      <span>升舱</span>
                    </span>
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/"
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                      >
                        Get Started
                      </Link>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden flex-1 justify-center text-center lg:flex lg:items-center">
            <ul className="items-center pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.href}
                    className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-secondary focus:outline-none transition-colors duration-200 ${
                      isActive(menu.href)
                        ? 'text-secondary bg-secondary bg-opacity-20 font-medium'
                        : 'text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            {isLoggedIn ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.300' }}
                  _active={{ bg: 'whiteAlpha.400' }}
                  borderRadius="full"
                  pl={2}
                  transition="all 0.2s"
                >
                  <Flex align="center">
                    <Avatar
                      size="sm"
                      name={user.name || '用户'}
                      src={user.avatar || 'https://bit.ly/broken-link'}
                      mr={2}
                    />
                    <Box textAlign="left">
                      <Text fontWeight="bold" fontSize="sm">
                        {user.name || '用户'}
                      </Text>
                      <Text fontSize="xs" color="whiteAlpha.700">
                        {formatPhone(user.phone)}
                      </Text>
                    </Box>
                  </Flex>
                </MenuButton>
                <MenuList
                  bg="white"
                  borderColor="gray.200"
                  boxShadow="lg"
                  borderRadius="md"
                  p="2"
                >
                  <MenuItem
                    icon={<FaUser color="#1E3A8A" />}
                    onClick={onClickUserProfile}
                    color="text"
                    _hover={{ bg: 'gray.100' }}
                    borderRadius="md"
                    mb="1"
                  >
                    个人资料
                  </MenuItem>
                  <MenuItem
                    icon={<FaShoppingCart color="#1E3A8A" />}
                    onClick={onClickMyOrder}
                    color="text"
                    _hover={{ bg: 'gray.100' }}
                    borderRadius="md"
                    mb="1"
                  >
                    我的订单
                  </MenuItem>
                  <MenuItem
                    icon={<FaSignOutAlt color="#1E3A8A" />}
                    onClick={onClickLogout}
                    color="text"
                    _hover={{ bg: 'gray.100' }}
                    borderRadius="md"
                  >
                    退出登录
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                as={Link}
                href="/login"
                variant="outline"
                size="md"
                borderRadius="full"
                fontWeight="medium"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                _active={{ bg: 'whiteAlpha.300' }}
                transition="all 0.2s"
              >
                登录
              </Button>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};
