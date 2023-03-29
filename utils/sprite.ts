const template = (icon: string): string => `/icons/${icon}.svg`;

export type IconMap = {
  burgerMenu: string;
  logo: string;
  organicProducts: string;
  applePie: string;
  macaroni: string;
  croissant: string;
  notFound: string;
  punctuality: string;
  blender: string;
  location: string;
};

const icons: IconMap = {
  burgerMenu: template('burger-menu'),
  logo: template('logo'),
  organicProducts: template('organic-products'),
  applePie: template('apple-pie'),
  macaroni: template('macaroni'),
  croissant: template('croissant'),
  notFound: template('404'),
  punctuality: template('punctuality'),
  blender: template('blender'),
  location: template('location'),
};

export default icons;
