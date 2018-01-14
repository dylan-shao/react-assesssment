import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('<Header />', () => {
  it('calls componentDidMount', () => {
    const wrapper = shallow(<Header headerMessage='' userName=''/>);
    expect(wrapper.find('header')).to.have.length(1);
  });
});