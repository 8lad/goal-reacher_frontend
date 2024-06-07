import React from 'react';
import { ContentContainer } from '../shared/ContentContainer/ContentContainer';
import { Logo } from '../shared/Logo/Logo';

export const MainHeader = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 py-3 general-gradient bg-white shadow-gray shadow-md">
      <ContentContainer>
        <div className="flex">
          <Logo />
        </div>
      </ContentContainer>
    </header>
  );
};
