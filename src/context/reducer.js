import { GET_FROM_LOCAL, ADD_TODO, REMOVE_TODO, MARK_AS_DONE, REMOVE_ALL } from './action.types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_FROM_LOCAL:
            return [...action.payload];
        case ADD_TODO:
            return [...state, action.payload];
        case MARK_AS_DONE:
            return state.map(e => e.id === action.payload ?
                e.add ? { ...e, add: false } : { ...e, add: true }
                : e);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case REMOVE_ALL:
            return [];

        default:
            return state;
    }

}
export default reducer;
