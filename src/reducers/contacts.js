export const chartData = (state = [], action) => { // (1)
    switch (action.type) { // (2)
        case 'CHANGE_CHART_DATA':
            return [
                ...action.chartData
            ]
        case 'ADD_CHAR_DATA' :
            return {
                ...state,
                charData: [...state.charData, action.newItem]
            }
        default:
            return state
    }
}
