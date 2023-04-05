import { Wrapper, Content, Header, EventList, Event } from './Events.style';
import { events } from './Events.data';
import Icon from '../Icon/Icon';
import { useDeviceType } from '@/hooks/useWindowSize';

const Events = () => {
  const { desktop } = useDeviceType();

  return (
    <Wrapper>
      <Content>
        <Header>Events by Green Goodies</Header>
        {events && (
          <EventList>
            {events.map((event) => (
              <Event key={event.name}>
                <div className="headWrapper">
                <div className='head'>
                  <Icon
                    icon={event.icon}
                    width={!desktop ? 105 : 140}
                    height={!desktop ? 60 : 80}
                  />
                  <h3>{event.name}</h3>
                </div>
                </div>
                
                <div className='body'>
                  <span>
                    {event.date}
                    <br />
                    {event.time}
                  </span>
                  <p>{event.description}</p>
                </div>
              </Event>
            ))}
          </EventList>
        )}
      </Content>
    </Wrapper>
  );
};

export default Events;
