export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    url: 'https://www.facebook.com/#',
    name: 'Facebook',
    icon: '/images/socials/facebook.svg',
  },
  {
    url: 'https://zalo.me/#',
    name: 'Zalo',
    icon: '/images/socials/zalo.svg',
  },
  {
    url: 'https://www.tiktok.com',
    name: 'Tiktok',
    icon: '/images/socials/tiktok.svg',
  },
];
