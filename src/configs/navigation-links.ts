import { NavigationModel } from '@/models';

export const navigationLinks: NavigationModel[] = [
  {
    id: '1',
    name: 'Lorem ipsum',
    slug: '/',
  },
  {
    id: '2',
    name: 'Dolor sit',
    slug: '#',
  },
  {
    id: '3',
    name: 'Amet consectetur',
    slug: '#',
    children: [
      {
        id: '4',
        name: 'Adipisicing elit',
        slug: '#',
      },
      {
        id: '5',
        name: 'Sed do eiusmod',
        slug: '#',
      },
      {
        id: '6',
        name: 'Tempor incididunt',
        slug: '#',
      },
    ],
  },
];
