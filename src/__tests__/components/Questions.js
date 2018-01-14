import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import Questions from '../../components/Questions';

const ee = global.expect;
describe('<Question />', () => {
  let defaultProps;
  beforeEach(function(){
	defaultProps = {
		clickHandler: sinon.spy(),
		questionId: 0,
		content: 'content',
		choices: [{cid: 1, content: 'choice1'}, 
  	      {cid: 2, content: 'choice2'}, 
  	      {cid: 3, content: 'choice3'}],
		points: {}
  	};
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Questions {...defaultProps}/>)
      .toJSON();
    ee(tree).toMatchSnapshot();
  });
  test('should render Loading if content and choices deoes not exist', function() {
  	defaultProps.content = '';
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	expect(wrapper.text()).to.equal('Loading');
  });

  test('should contain h2 with content', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	expect(wrapper.find('h2').text()).to.equal(defaultProps.content);
  });

  test('should render a list with button based on choices', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	expect(wrapper.find('li button').length).to.equal(defaultProps.choices.length);
  });

  test('should trigger clickHandler when click the choices', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	wrapper.find('li button').first().simulate('click');
  	expect(defaultProps.clickHandler.callCount).to.equal(1);
  });
});