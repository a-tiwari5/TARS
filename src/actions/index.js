// Action creator
export const selectSong = (post) => {
    return {
        type: 'POST_SELECTED',
        payload: post
    }
}