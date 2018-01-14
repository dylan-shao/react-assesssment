import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';


describe('<LoginForm />', () => {
  it('should contain a form', () => {
    const wrapper = shallow(<LoginForm onFormSubmit={function(){}}/>);
    // expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('form')).toHaveLength(1);
  });
  it('should trigger form subit handler that passed from props', () => {
  	const spy = jest.fn();
  	const wrapper = shallow(<LoginForm onFormSubmit={spy}/>);
  	wrapper.find('form').simulate('submit');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});