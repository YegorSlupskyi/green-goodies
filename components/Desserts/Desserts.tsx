import {
  Content,
  DessertCard,
  DessertsList,
  Header,
  ImageWrapper,
  OrderButton,
  Title,
  Units,
  Wrapper,
} from './Desserts.style';
import { desserts } from './Desserts.data';
import Image from 'next/image';
import { useDeviceType } from '@/hooks/useWindowSize';
import { forwardRef } from 'react';

const Desserts = forwardRef<any>(function Desserts(props, ref) {
  const { mobile, tablet, desktop } = useDeviceType();

  const onDessertClick = () => {
    (ref as any).current.scrollIntoView();
  };

  return (
    <Wrapper>
      <Content>
        <Header>Our desserts</Header>
        <DessertsList>
          {desserts.map((dessert) => (
            <DessertCard key={dessert.title}>
              <ImageWrapper>
                <Image
                  src={
                    mobile
                      ? dessert.icon
                      : tablet
                      ? dessert.iconTablet
                      : dessert.iconDesktop
                  }
                  alt={dessert.title}
                  fill
                  unoptimized
                />
              </ImageWrapper>
              <Title>{dessert.title}</Title>
              <Units>{dessert.mass}</Units>
              <OrderButton onClick={onDessertClick}>Order</OrderButton>
            </DessertCard>
          ))}
        </DessertsList>
      </Content>
    </Wrapper>
  );
});

export default Desserts;
