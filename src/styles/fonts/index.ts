import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';

export const nunito = Nunito({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const mapleMonoNL = localFont({
  src: [
    { path: './MapleMonoNL-Regular.ttf', weight: '400', style: 'normal' },
    { path: './MapleMonoNL-Italic.ttf', weight: '400', style: 'italic' },
    { path: './MapleMonoNL-Bold.ttf', weight: '700', style: 'normal' },
    { path: './MapleMonoNL-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: './MapleMonoNL-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './MapleMonoNL-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
    { path: './MapleMonoNL-Light.ttf', weight: '300', style: 'normal' },
    { path: './MapleMonoNL-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: './MapleMonoNL-Medium.ttf', weight: '500', style: 'normal' },
    { path: './MapleMonoNL-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: './MapleMonoNL-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './MapleMonoNL-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: './MapleMonoNL-Thin.ttf', weight: '100', style: 'normal' },
    { path: './MapleMonoNL-ThinItalic.ttf', weight: '100', style: 'italic' },
    { path: './MapleMonoNL-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: './MapleMonoNL-ExtraLightItalic.ttf', weight: '200', style: 'italic' },
  ],
  variable: '--font-maple-mono',
});
