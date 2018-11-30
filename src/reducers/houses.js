
const initialState = {
  housesAreLoading: false,
	houses: [],
}
 
export default function(prevState = initialState, action) {
	switch (action.type) {
		case 'HOUSES_ARE_LOADING':
			return {...prevState, housesAreLoading: action.payload}
		case 'GET_HOUSES':
			return {...prevState, houses: action.payload, housesAreLoading: false}
		default:  
			return prevState
	}
}