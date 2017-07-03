// import redux stuff
import { connect } from 'react-redux';

// import component
import NotFound from '../components/NotFound';

const mapStateToProps = (state, ownProps) => {
  return {
    message: 'not found'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);