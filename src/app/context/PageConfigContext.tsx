import React, { createContext, useContext } from 'react';

interface PageConfigContextProps {
  hideNavbar?: boolean;
}

const PageConfigContext = createContext<PageConfigContextProps>({});

export const PageConfigProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: PageConfigContextProps;
}) => {
  return (
    <PageConfigContext.Provider value={value}>
      {children}
    </PageConfigContext.Provider>
  );
};

export const usePageConfig = () => useContext(PageConfigContext);
