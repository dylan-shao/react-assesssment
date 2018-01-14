import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('<Header />', () => {
  it('render <header> and <h1>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header.common-header')).to.have.length(1);
    expect(wrapper.find('header h1')).to.have.length(1);
  });
  it('render text based on props', () => {
  	const msg = 'Hi';
  	const name = 'John';
    const wrapper = shallow(<Header headerMessage={msg} userName={name}/>);
    expect(wrapper.text()).to.equal(msg + ' ' + name);
  });
});