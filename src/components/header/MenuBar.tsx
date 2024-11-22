'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavigationModel } from '@/models';

export interface MenuBarProps {
  className?: string;
  navigation?: NavigationModel[];
}

const MenuBar: FC<MenuBarProps> = ({ navigation }) => {
  const toggleDrawer = () => {
    const drawer = document.getElementById('main-drawer') as HTMLInputElement;
    if (drawer) {
      drawer.checked = !drawer.checked;
    }
  };

  return (
    <div className="drawer">
      <input
        id="main-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content">
        <label
          htmlFor="main-drawer"
          className="btn btn-circle btn-ghost drawer-button"
        >
          <svg
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </label>
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="main-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="relative z-30 min-h-full w-full bg-base-200 p-4 text-base-content sm:w-[30rem]">
          <label
            htmlFor="main-drawer"
            className="btn btn-circle btn-ghost drawer-button absolute right-0 top-0 mr-1 mt-1"
          >
            <svg
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </label>

          <div>
            <Image
              className="h-12 w-auto rounded"
              src="/logo-rec.svg"
              alt="Logo"
              width={200}
              height={200}
              sizes="200px"
              priority
            />

            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div className="divider"></div>

          <ul className="menu menu-lg px-0">
            {navigation?.map((nav) => (
              <li
                key={nav.id}
                onClick={toggleDrawer}
              >
                <Link
                  tabIndex={0}
                  href={`/${nav.slug}`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
