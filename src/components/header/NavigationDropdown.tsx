'use client';

import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';
import { NavigationModel } from '@/models';

export interface NavigationDropdownProps {
  navigation: NavigationModel;
}

const NavigationDropdown: FC<NavigationDropdownProps> = ({ navigation }) => {
  const closeRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleBackdropClick = () => {
      closeDropdown();
    };

    document.body.addEventListener('click', handleBackdropClick);

    return () => {
      document.body.removeEventListener('click', handleBackdropClick);
    };
  });

  const closeDropdown = () => {
    if (closeRef?.current) {
      closeRef.current.open = false;
    }
  };

  if (!navigation) {
    return <></>;
  }

  if (!navigation.children) {
    return (
      <Link
        href={`/${navigation.slug}`}
        tabIndex={0}
      >
        {navigation.name}
      </Link>
    );
  }

  return (
    <details
      ref={closeRef}
      className="dropdown dropdown-end dropdown-bottom"
    >
      <summary
        tabIndex={0}
        role="button"
        className="relative"
      >
        {navigation.name}
      </summary>

      <ul
        tabIndex={0}
        className="menu dropdown-content shadow-card z-[50] rounded-box bg-base-100 p-2 md:min-w-80"
      >
        {navigation?.children?.map((nav) => (
          <li
            key={nav.id}
            onClick={closeDropdown}
          >
            <Link
              href={`/${nav.slug}`}
              tabIndex={0}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default NavigationDropdown;
