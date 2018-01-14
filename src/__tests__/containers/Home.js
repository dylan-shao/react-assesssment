import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Home from '../../containers/Home';

xdescribe('<Home />', () => {
  let defaultProps;
  beforeEach(function(){
  	defaultProps = {
	  clearData: sinon.spy(),
	  createUserName: sinon.spy(),
	  setHeaderMsg: sinon.spy()
  	};
  });
  it('should contain LoginForm', () => {
  	const wrapper = mount(<Home {...defaultProps}/>);
  	expect(wrapper.find('LoginForm').length).to.equal(1);
  });
  it('', () => {
  	
  });
  it('', () => {
  	
  });
});