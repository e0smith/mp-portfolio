export const getPhotos = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/api/photos/")
            .then(resp => resp.json())
            .then(photos => {
                dispatch({
                    type: "GET_PHOTOS",
                    payload: photos
                })
            })
        }
}