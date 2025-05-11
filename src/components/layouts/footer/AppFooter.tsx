import { FC } from 'react';

import AppLogo from '@/components/layouts/logo';

const AppFooter: FC = () => {
  return (
    <footer className="bg-base-100 relative z-40 w-full border-t">
      <div className="container mx-auto footer sm:footer-horizontal px-2 py-10">
        <aside>
          <AppLogo className="w-30 h-10" />

          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

      <div className="bg-slate-900 px-2 py-3 flex items-center justify-center text-white">
        <p>Copyright © {new Date().getFullYear()} - next.js</p>
      </div>
    </footer>
  );
};

export default AppFooter;
