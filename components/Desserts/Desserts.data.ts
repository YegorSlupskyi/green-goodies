export type Dessert = {
  icon: string;
  iconTablet: string;
  iconDesktop: string;
  title: string;
  mass: string;
};

const pathToDessert = (name: string | number, device: 'm' | 't' | 'd') =>
  `/images/desserts/d${name}_${device}.png`;

export const desserts: Dessert[] = [
  {
    icon: pathToDessert(1, 'm'),
    iconTablet: pathToDessert(1, 't'),
    iconDesktop: pathToDessert(1, 'd'),
    title: 'Apple Pie',
    mass: '150 g',
  },
  {
    icon: pathToDessert(2, 'm'),
    iconTablet: pathToDessert(2, 't'),
    iconDesktop: pathToDessert(2, 'd'),
    title: 'Cherry Cup-Cakes',
    mass: '122 g',
  },
  {
    icon: pathToDessert(3, 'm'),
    iconTablet: pathToDessert(3, 't'),
    iconDesktop: pathToDessert(3, 'd'),
    title: 'Strawberry Cupcakes',
    mass: '90 g',
  },
  {
    icon: pathToDessert(4, 'm'),
    iconTablet: pathToDessert(4, 't'),
    iconDesktop: pathToDessert(4, 'd'),
    title: 'Eclairs with Raspberry',
    mass: '70 g',
  },
  {
    icon: pathToDessert(5, 'm'),
    iconTablet: pathToDessert(5, 't'),
    iconDesktop: pathToDessert(5, 'd'),
    title: 'Donuts',
    mass: '175 g',
  },
  {
    icon: pathToDessert(6, 'm'),
    iconTablet: pathToDessert(6, 't'),
    iconDesktop: pathToDessert(6, 'd'),
    title: 'Unicorn Cake',
    mass: '85 g',
  },
  {
    icon: pathToDessert(7, 'm'),
    iconTablet: pathToDessert(7, 't'),
    iconDesktop: pathToDessert(7, 'd'),
    title: 'Macaroni',
    mass: '150 g',
  },
  {
    icon: pathToDessert(8, 'm'),
    iconTablet: pathToDessert(8, 't'),
    iconDesktop: pathToDessert(8, 'd'),
    title: 'Blueberry Cheesecake',
    mass: '122 g',
  },
  {
    icon: pathToDessert(9, 'm'),
    iconTablet: pathToDessert(9, 't'),
    iconDesktop: pathToDessert(9, 'd'),
    title: 'Tangerine Crepes',
    mass: '90 g',
  },
  {
    icon: pathToDessert(10, 'm'),
    iconTablet: pathToDessert(10, 't'),
    iconDesktop: pathToDessert(10, 'd'),
    title: 'Fig Cake',
    mass: '70 g',
  },
  {
    icon: pathToDessert(11, 'm'),
    iconTablet: pathToDessert(11, 't'),
    iconDesktop: pathToDessert(11, 'd'),
    title: 'Chocolate Cookie',
    mass: '175 g',
  },
  {
    icon: pathToDessert(12, 'm'),
    iconTablet: pathToDessert(12, 't'),
    iconDesktop: pathToDessert(12, 'd'),
    title: 'Strawberry Cake-Pops',
    mass: '85 g',
  },
];
