import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return <div className="max-w-[1200px] ml-auto mr-auto px-5">{children}</div>;
};
