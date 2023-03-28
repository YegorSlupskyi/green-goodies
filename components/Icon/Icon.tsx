import Image from 'next/image';

export interface IconProps {
  icon: string;
  width?: number;
  height?: number
}

const Icon: React.FC<IconProps> = ({ icon, width = 24, height = 22 }) => {
  return (
    <Image src={icon} alt='icon' width={width} height={height}/>
  );
};

export default Icon;
