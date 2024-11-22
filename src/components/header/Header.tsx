'use client';

import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import Logo from '@/components/logo/Logo';
import Navigation from './Navigation';
import MenuBar from './MenuBar';

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false);
  const router = useRouter();

  const renderSearchForm = () => {
    return (
      <form
        className="flex flex-1 items-center justify-center py-2"
        onSubmit={(e) => {
          e.preventDefault();
          router.push('/search');
        }}
      >
        <label className="input input-ghost flex w-full items-center gap-2 bg-slate-50 !outline-none dark:bg-slate-800">
          <svg
            className="text-hint mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="grow"
            autoFocus
          />

          <button
            type="button"
            className="btn btn-circle btn-ghost"
            onClick={() => setShowSearchForm(false)}
          >
            <svg
              className="text-hint h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </label>

        <input
          type="submit"
          hidden
          value=""
        />
      </form>
    );
  };

  return (
    <div
      className={`sticky top-0 z-[50] w-full border-b bg-base-100 ${className}`}
    >
      <div className="container">
        <div className="flex h-20 justify-between">
          <div className="flex items-center lg:hidden">
            <MenuBar />
          </div>

          <div className="flex items-center xl:flex-1">
            <Logo className="w-20" />
          </div>

          <div className="mx-4 hidden justify-center lg:flex xl:flex-[2]">
            {showSearchForm ? renderSearchForm() : <Navigation />}
          </div>

          <div className="flex items-center justify-end gap-0.5 text-slate-700 dark:text-slate-100 xl:flex-1">
            <button className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
