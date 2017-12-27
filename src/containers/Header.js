import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps({ header }) {
  return {
    headerMessage: header.headerMessage,
    userName: header.userName,
  };
}

/**
 * container for Header
 */
export default connect(mapStateToProps)(Header);
