import {connect} from 'react-redux';
import { removeFromFav, addToFav } from '../../_actions/actionCreators';
import News from './News.component';

const mapStateToProps = state => {  
    return {
        articles: state.mainReducer.articles,
        favourites: state.mainReducer.favourites,
        selectedNewsV: state.mainReducer.selectedNews
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      addToFavourite: source => dispatch(addToFav(source)),
      removeFromFavourite: source => dispatch(removeFromFav(source))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(News)