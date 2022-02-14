import Login from './login';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeValue1} from '@redux/actions';

function mapStateToProps(state, props) {
  console.log('stateeeee:->>>>>>>' + JSON.stringify(state));
  return {
    // count: state.myReducer.count,
    // name: state.myReducer.name,
    // image: state.changesDataReducer.image,
    // names: state.changesDataReducer.names,
    // named: state.changesDataReducer.named,
    value1: state.changesDataReducer.value1,
    state: state,
  };
}

export default connect(mapStateToProps, {changeValue1})(Login);
