export const initialState = {
    player: [],
    stats: [],
    isFetchingData: false,
    error: ''
}

export const playersReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}