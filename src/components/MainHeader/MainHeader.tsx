import React from 'react';
import { ContentContainer } from '../shared/ContentContainer/ContentContainer';
import { Logo } from '../shared/Logo/Logo';
import { Navigation } from '../shared/Navigation/Navigation';

export const MainHeader = () => {
  return (
    <header className="w-full max-h-[74px] fixed top-0 left-0 right-0 py-3 general-gradient bg-white shadow-gray shadow-md">
      <ContentContainer>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </ContentContainer>
    </header>
  );
};
