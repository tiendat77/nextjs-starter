'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface AppLogoProps {
  className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ className = 'flex-shrink-0' }) => {
  return (
    <Link
      href="/"
      className={`${className}`}
    >
      <Image
        className="h-auto w-full"
        src="/logo-rec.svg"
        alt="Logo"
        width={200}
        height={200}
        sizes="200px"
        priority
      />
    </Link>
  );
};

export default AppLogo;
