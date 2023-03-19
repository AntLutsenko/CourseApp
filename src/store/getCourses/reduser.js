const initialState = {
	courses: [],
	course: null,
	isLoading: false,
	hasError: false,
	currentPage: 1,
	itemOnPage: 10,
};

const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'START_FETCH_COURSES': {
			return {
				...state,
				isLoading: true,
			};
		}

		case 'ERROR_LOADED_COURSES': {
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		}

		case 'LOADED_ALL_COURSES': {
			return {
				...state,
				isLoading: false,
				hasError: false,
				courses: action.payload || [],
			};
		}

		case 'LOADED_COURSE': {
			return {
				...state,
				course: action.payload || [],
			};
		}

		case 'SET_CURRENT_PAGE': {
			return {
				...state,
				currentPage: action.payload,
			};
		}
		default:
			return state;
	}
};

export default coursesReducer;
