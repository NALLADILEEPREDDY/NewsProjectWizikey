import  * as types from "./actionTypes";

export const updateSources = (data) => ({
    type: types.FETCH_SOURCES,
    payload: data 
});
export const updateHeadlines =  (news) => ({
    type: types.FETCH_NEWS,
    payload: news
});

export const addToFav = source => ({
    type: types.ADD_FAVOURITE,
    payload: source
});

export const removeFromFav = source => ({
    type: types.REMOVE_FAVOURITE,
    payload: source
});

export const selectedNews = source =>({
    type: types.SELECTED_NEWS,
    payload: source
});

export const selectedChannel = name =>({
    type: types.SELECTED_CHANNEL,
    payload: name
});

export const updateFetchHeadlineError= error =>({
    type: types.HEADLINE_FETCH_ERROR,
    payload: error
});

export const updateFetchSourcesError = error => ({
    type: types.SOURCE_FETCH_ERROR,
    payload: error
})