export interface Contact {
  name: string;
  url: string;
  value: string;
}

export const contactLinks: Contact[] = [
  {
    name: 'Email',
    url: 'mailto:nextjs@example.com',
    value: 'nextjs@example.com',
  },
  {
    name: 'Điện thoại / Zalo',
    url: 'tel:0123456789',
    value: '0123 456 789',
  },
  {
    name: 'Địa chỉ',
    url: 'https://goo.gl/maps/xxx',
    value: '123 Đường abc, Quận 1, TP. Hồ Chí Minh',
  },
];
