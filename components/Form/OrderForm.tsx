import { ChangeEvent, useState } from 'react';
import {
  Wrapper,
  Content,
  Header,
  Form,
  Name,
  Input,
  Submit,
} from './OrderForm.style';

type InputName = 'name' | 'email';

const inputNames = {
  name: 'name' as InputName,
  email: 'email' as InputName,
};

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case inputNames.name:
        setName(e.target.value);
        break;
      case inputNames.name:
        setEmail(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <Content>
        <Header>Wanna order some sweets?</Header>
        <Form>
          <Name>Leave your contacts here</Name>
          <div className='input-group'>
            <Input
              placeholder='Name'
              name={inputNames.name}
              onChange={handleInput}
              required
              type='text'
            />
            <Input
              placeholder='Email'
              name={inputNames.email}
              onChange={handleInput}
              required
              type='email'
            />
          </div>
          <Submit>Contact Me</Submit>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default OrderForm;
