import Login from './login';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  changeValue1,
  pincodeRequested,
  pincodeFailed,
  changenamed,
} from '@redux/actions';


function mapStateToProps(state, props) {
  console.log('stateeeee:->>>>>>>' + JSON.stringify(state));
  return {
    // count: state.myReducer.count,
    // name: state.myReducer.name,
    // image: state.changesDataReducer.image,
    // names: state.changesDataReducer.names,
    // named: state.changesDataReducer.named,
    pincodeList: state.pincodeDataReducer,
    changeNames: state.changessDataReducer.changeNames,
    value1: state.changesDataReducer.value1,
    state: state,
    // pincodeList: state.pincodeDataReducer.pincodeList,
  };
}

export default connect(mapStateToProps, {
  changeValue1,
  pincodeRequested,
  pincodeFailed,
  changenamed,
})(Login);
