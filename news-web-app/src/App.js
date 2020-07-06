import React from 'react';
import './App.css';
import  MainScreen  from './components/MainScreen/mainScreen.component';
import { connect } from 'react-redux';
import { fetchSources } from './_actions/actions';
import Loading from './components/common/loading';

function App(props) {
  if(!props.sourceFetchError && props.sources.length === 0){
    props.fetchSources()
    return(<Loading/>)
  }
  return (
    <div className="App">
      <MainScreen/>
    </div>
  );
}
const mapStateToProps = state => {  
  return {
    sources: state.mainReducer.sources,
    sourceFetchError: state.mainReducer.sourceFetchError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => dispatch(fetchSources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
