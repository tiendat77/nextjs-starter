'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'flex-shrink-0' }) => {
  return (
    <Link
      href="/"
      className={`inline-block text-slate-600 ${className}`}
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

export default Logo;
