// import redux stuff
import { connect } from 'react-redux';

// import component
import Example from '../components/Example';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.example.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);