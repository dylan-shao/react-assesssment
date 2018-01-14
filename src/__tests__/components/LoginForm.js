import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LoginForm from '../../components/LoginForm';


describe('<LoginForm />', () => {
  it('should contain a form', () => {
    const wrapper = shallow(<LoginForm onFormSubmit={function(){}}/>);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('should trigger form subit handler that passed from props', () => {
  	const spy = sinon.spy();
  	const wrapper = shallow(<LoginForm onFormSubmit={spy}/>);
  	wrapper.find('form').simulate('submit');
    expect(spy.calledOnce).to.be.true;
  });
});