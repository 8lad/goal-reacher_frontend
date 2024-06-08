'use client';

import React from 'react';
import classNames from 'classnames';
import { naviationLinks } from '@/constants/generalConstants';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { usePathname } from 'next/navigation';
import { ActionButton } from '../ActionButton/ActionButton';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const path = usePathname();

  return (
    <nav className={classNames(className)}>
      <ul className="flex gap-4 items-center" aria-label="Navigation links list">
        {naviationLinks.map((link) => (
          <NavigationLink key={link.path} isActive={path === link.path} {...link} />
        ))}
        <li>
          <ActionButton text="Login" onClick={() => console.log('Test')} buttonType="secondary" />
        </li>
      </ul>
    </nav>
  );
};