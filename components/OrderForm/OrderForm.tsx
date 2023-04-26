import { ChangeEvent, FormEvent, Ref, forwardRef, useState } from 'react';
import {
  Wrapper,
  Content,
  Header,
  Form,
  Name,
  Input,
  Submit,
} from './OrderForm.style';
import validateEmail from '@/helpers/validateEmail';

type InputName = 'name' | 'email';



const inputNames = {
  name: 'name' as InputName,
  email: 'email' as InputName,
};

const OrderForm = forwardRef(function OrderForm(props, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case inputNames.name:
        setName(e.target.value);
        break;
      case inputNames.email:
        setEmail(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Invalid email entered');
      return;
    }
    alert('We have received your order!');
    setName('');
    setEmail('');
  };

  return (
    <Wrapper ref={ref as Ref<HTMLElement>}>
      <Content>
        <Header>Wanna order some sweets?</Header>
        <Form onSubmit={handleSubmit}>
          <Name>Leave your contacts here</Name>
          <div className='input-group'>
            <Input
              placeholder='Name'
              name={inputNames.name}
              onChange={handleInput}
              required
              type='text'
              value={name}
            />
            <Input
              placeholder='Email'
              name={inputNames.email}
              onChange={handleInput}
              required
              type='email'
              value={email}
            />
          </div>
          <Submit type='submit'>Contact Me</Submit>
        </Form>
      </Content>
    </Wrapper>
  );
});

export default OrderForm;
