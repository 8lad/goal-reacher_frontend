'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Routes } from '@/constants/generalConstants';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const pathname = usePathname();
  const isHomePage = pathname === Routes.Home;
  const imageSettings = {
    width: 50,
    height: 50,
    alt: 'Site logo',
    src: '/logo.webp',
    className: 'block rounded-full',
    priority: true,
  };

  if (isHomePage) {
    return (
      <div className={className}>
        <Image {...imageSettings} alt={imageSettings.alt} />
      </div>
    );
  }

  return (
    <Link href={Routes.Home} className={className}>
      <Image {...imageSettings} alt={imageSettings.alt} />
    </Link>
  );
};
