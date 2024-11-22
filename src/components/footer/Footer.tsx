'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { socialLinks } from '@/configs/social-links';
import { contactLinks } from '@/configs/contact-links';
import { blogLinks } from '@/configs/blog-links';

import { BlogModel } from '@/models';

export interface FooterProps {
  className?: string;
  blogs?: BlogModel[];
}

const Footer: FC<FooterProps> = ({ blogs = blogLinks }) => {
  return (
    <div className="relative z-40 w-full border-t bg-base-200">
      <div className="container">
        <footer className="footer px-0 py-10 text-base text-base-content">
          <aside>
            <Image
              className="h-10 w-auto rounded"
              src="/logo-rec.svg"
              alt="Logo"
              width={200}
              height={200}
              sizes="200px"
              priority
            />

            <p className="mt-4 max-w-96">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <ul className="mt-4 flex items-center gap-2 xl:gap-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link href={social.url}>
                    <Image
                      alt=""
                      sizes="40px"
                      height={40}
                      width={40}
                      className="h-10 w-10 min-w-10"
                      src={social.icon}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {blogs?.length && (
            <nav>
              <h6 className="footer-title">Liên kết</h6>

              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  target="_blank"
                  href={'/blog/' + blog.slug}
                >
                  {blog.title}
                </Link>
              ))}
            </nav>
          )}

          {contactLinks.length && (
            <nav className="lg:max-w-96">
              <h6 className="footer-title">Liên hệ</h6>

              <ul className="space-y-2">
                {contactLinks?.map((contact, index) => (
                  <li key={index}>
                    <span className="font-medium">{contact.name}: &nbsp;</span>
                    <a href={contact.url}>{contact.value}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </footer>
      </div>

      <footer className="footer items-center justify-center bg-slate-900 p-4 text-white">
        <p>Copyright © {new Date().getFullYear()} - next.js</p>
      </footer>
    </div>
  );
};

export default Footer;
