import Axios from 'axios';
import * as creators from './actionCreators'
export const fetchSources = () =>{
  return async(dispatch)=>{
    try{
        let url = `https://newsapi.org/v2/sources?apiKey=9fb3c471faa44351a35f9e8cb4af9f1f`;
        const response = await Axios.get(url);
        await dispatch(creators.updateSources(response.data.sources));
    }
    catch(error){
      await dispatch(creators.updateFetchSourcesError(error))
    }
    
  }
}

export const fetchHeadlines = (name) => {
  return async (dispatch) => {
    try{
      let url = "http://newsapi.org/v2/top-headlines?sources="+name+"&apiKey=9fb3c471faa44351a35f9e8cb4af9f1f";
      const response = await Axios.get(url);
      await dispatch(creators.updateHeadlines(response.data.articles));
    }
    catch(error){
      await dispatch(creators.updateFetchHeadlineError(error))
    }
  }
}