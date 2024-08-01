import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default PageLayout;
