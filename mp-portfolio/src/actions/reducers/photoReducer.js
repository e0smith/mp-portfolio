const initialState = {
    photos: []
}
const photoReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_PHOTOS":
            return {
                ...state,
                photos: [...state.photos, action.payload]
            }
        case "GET_PHOTOS":
            return {
                ...state,
                photos: [...state.photos, ...action.payload]
            }
        default:
            return state
    }
}

export default photoReducer;