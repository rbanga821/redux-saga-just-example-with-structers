import Profile from './profile';
import {connect} from 'react-redux';
import {
  pincodeRequested,
  pincodeSucceeded,
  pincodeFailed,
} from '@redux/actions';

function mapStateToProps(state, props) {
  console.log('stateeeee:->>>>>>>' + JSON.stringify(state));
  return {
    // pincodeList: state.pincodeDataReducer.pincodeList,
    state: state,
  };
}

export default connect(mapStateToProps, {
  pincodeRequested,
  pincodeSucceeded,
  pincodeFailed,
})(Profile);
