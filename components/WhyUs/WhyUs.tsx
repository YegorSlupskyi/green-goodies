import { useDeviceType } from '@/hooks/useWindowSize';
import { Container } from '@/styles/globals.style';
import icons from '@/utils/sprite';
import Icon from '../Icon';
import {
  ArgumentList,
  Argument,
  Header,
  Wrapper,
  ArgumentHeader,
  ArgumentText,
  ArgumentSymbol,
} from './WhyUs.style';

const WhyUs = () => {
  const { mobile } = useDeviceType();

  return (
    <Wrapper>
      <Header>Why should you choose {mobile ? 'Us' : 'Green Goodies'}?</Header>
      <ArgumentList>
        <Argument>
          <ArgumentSymbol>
            <Icon icon={icons.organicProducts} width={80} height={80} />
          </ArgumentSymbol>
          <ArgumentHeader>Organic products</ArgumentHeader>
          <ArgumentText>
            We choose natural products to guarantee safety for all our clients
          </ArgumentText>
        </Argument>
        <Argument>
          <ArgumentSymbol>
            <Icon icon={icons.punctuality} width={80} height={80} />
          </ArgumentSymbol>
          <ArgumentHeader>Punctuality</ArgumentHeader>
          <ArgumentText>
            The Green Goodies team does everything possible to ensure that you
            get your dessert on time
          </ArgumentText>
        </Argument>
        <Argument>
          <ArgumentSymbol>
            <Icon icon={icons.blender} width={80} height={80} />
          </ArgumentSymbol>
          <ArgumentHeader>Professionalism</ArgumentHeader>
          <ArgumentText>
            The work on the fulfillment of orders is done by our team of pastry
            chefs experienced with a variety of desserts
          </ArgumentText>
        </Argument>
      </ArgumentList>
    </Wrapper>
  );
};

export default WhyUs;
