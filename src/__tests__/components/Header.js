import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('<Header />', () => {
  it('render <header> and <h1>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header.common-header').length).toEqual(1);
    expect(wrapper.find('header h1').length).toEqual(1);
  });
  it('render text based on props', () => {
  	const msg = 'Hi';
  	const name = 'John';
    const wrapper = shallow(<Header headerMessage={msg} userName={name}/>);
    expect(wrapper.text()).toEqual(msg + ' ' + name);
  });
});