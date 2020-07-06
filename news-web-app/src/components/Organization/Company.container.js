import {connect} from 'react-redux';
import Company from './Company.component';
import { removeFromFav, addToFav, selectedNews } from '../../_actions/actionCreators';

const mapStateToProps = state => {  
    return {
        articles: state.mainReducer.articles,
        favourites: state.mainReducer.favourites,
        selectedChannel: state.mainReducer.selectedChannel,
        headlineFetchError: state.mainReducer.headlineFetchError
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      addToFavourite: source => dispatch(addToFav(source)),
      removeFromFavourite: source => dispatch(removeFromFav(source)),
      selectedNews: source => dispatch(selectedNews(source))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Company)