export const getPortfolios = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/api/portfolios/")
            .then(resp => resp.json())
            .then(portfolios => {
                dispatch({
                    type: "GET_PORTFOLIOS",
                    payload: portfolios
                })
            })
        }
}