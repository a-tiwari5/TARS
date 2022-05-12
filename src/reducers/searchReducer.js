import { FETCH_POSTS, SEARCH_POST } from "../actions/types"
import axios from "axios"



const initialState = {
    text: '',
    posts: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_POST:
            return {
                ...state,
                text: action.payload
            };
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
}
