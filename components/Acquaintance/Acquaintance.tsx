import { useDeviceType } from '@/hooks/useWindowSize';
import icons from '@/utils/sprite';
import Icon from '../Icon';
import {
  Header,
  Paragraph,
  TextWrapper,
  Wrapper,
  Address,
  Map,
} from './Acquaintance.style';
import { headerText, paragraphText, address, map } from './Acquaintance.data';

const Acquaintance = () => {
  const { mobile } = useDeviceType();

  if (!mobile) {
    return (
      <>
        <Header>{headerText}</Header>
        <Wrapper>
          <Map>
            <iframe
              src={map}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </Map>
          <TextWrapper>
            <Paragraph>{paragraphText}</Paragraph>
            <Address>
              <div className='icon'>
                <Icon icon={icons.location} width={21} height={30} />
              </div>
              <div className='address'>{address}</div>
            </Address>
          </TextWrapper>
        </Wrapper>
      </>
    );
  }

  return (
    <Wrapper>
      <Header>{headerText}</Header>
      <TextWrapper>
        <Paragraph>{paragraphText}</Paragraph>
        <Address>
          <div className='icon'>
            <Icon icon={icons.location} width={21} height={30} />
          </div>
          <div className='address'>{address}</div>
        </Address>
      </TextWrapper>
      <Map>
        <iframe
          src={map}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </Map>
    </Wrapper>
  );
};

export default Acquaintance;
