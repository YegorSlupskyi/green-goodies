import icons from '@/utils/sprite';

export type Event = {
  icon: string;
  name: string;
  date: string;
  time: string;
  description: string;
};

export const events: Event[] = [
  {
    icon: icons.applePie,
    name: 'Apple Pie DIY',
    date: '21.03 - 23.03',
    time: '4pm',
    description:
      'Come and make the tastiest apple pie with the guidance of our pastry chef',
  },
  {
    icon: icons.macaroni,
    name: 'French Macaroni Night',
    date: '25.03 - 26.03',
    time: '6:30pm',
    description:
      'Spend the evening in pleasant company, enjoying a traditional French dessert',
  },
  {
    icon: icons.croissant,
    name: 'Croissants DIY',
    date: '30.03 - 01.04',
    time: '3pm',
    description:
      'Tasty chocolate croissants  —  seamlessly! Come to the DIY class and see for yourself',
  },
];
