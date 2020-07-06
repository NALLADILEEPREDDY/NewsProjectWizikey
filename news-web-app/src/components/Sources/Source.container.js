import {connect} from 'react-redux';
import {fetchHeadlines} from '../../_actions/actions';
import {selectedChannel} from '../../_actions/actionCreators';
import Source from './Source.component';

const mapStateToProps = state => {  
    return {
      sources: state.mainReducer.sources,
      favourites: state.mainReducer.favourites,
      sourceFetchError: state.mainReducer.sourceFetchError
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      fetchHeadlines: name => dispatch(fetchHeadlines(name)),
      selectedChannel: name => dispatch(selectedChannel(name))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Source)