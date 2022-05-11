import { FETCH_POSTS, SEARCH_POST } from "./types"
import axios from "axios";

export const searchPost = text => dispatch => {
    dispatch({
        type: SEARCH_POST,
        payload: text
    });
}

export const fetchPosts = text => dispatch => {
    axios
        .get('https://api.unsplash.com/search/photos', {
            params: {
                query: text,
                client_id: '3nDCTHXivTz9w8XLFUU1MC6NLo9PtreskRinC1NWUh0',
                per_page: 25
            }
        }).then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response
            })
        })
        .catch(err => console.log(err))
}