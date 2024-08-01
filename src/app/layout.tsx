import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RedirectHandler } from '@/components/RedirectHandler/RedirectHandler';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '机票/升舱/酒店优惠',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100`}>
        <ThemeProvider attribute="class">
          <ChakraProvider>
            <RedirectHandler />
            <Flex direction="column" minH="100vh">
              <Navbar />
              {children}
              <Footer />
            </Flex>
          </ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
