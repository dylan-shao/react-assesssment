import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Questions from '../../components/Questions';

const ee = global.expect;
describe('<Question />', () => {
  let defaultProps;
  beforeEach(function(){
	defaultProps = {
		clickHandler: jest.fn(),
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
  	expect(wrapper.text()).toEqual('Loading');
  });

  test('should contain h2 with content', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	expect(wrapper.find('h2').text()).toEqual(defaultProps.content);
  });

  test('should render a list with button based on choices', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	expect(wrapper.find('li button').length).toEqual(defaultProps.choices.length);
  });

  test('should trigger clickHandler when click the choices', () => {
  	const wrapper = shallow(<Questions {...defaultProps}/>);
  	wrapper.find('li button').first().simulate('click');
  	expect(defaultProps.clickHandler).toHaveBeenCalledTimes(1);
  });
});