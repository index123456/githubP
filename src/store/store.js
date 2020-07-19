import {createContext} from 'react';
import {
    TO_ADD_ACTION,
    TO_SEARCH_ACTION,
    TO_EDIT_TODO_ACTION,
    TO_DELETE_TODO_ACTION,
    TO_INIT_TODO_ACTION
} from './actionType';

export const stateContext = createContext();

export const theReducer = (state, action) => {
    const newState = {...state};
    switch (action.type) {
        case TO_ADD_ACTION:
            const newTodo = {
                id: newState.todos.length,
                text: action.val,
                state: false
            }
            newState.todos.push(newTodo);
            break;
        case TO_EDIT_TODO_ACTION:
            newState.todos.forEach((item) => {
                if(parseInt(item.id) === parseInt(action.index)) {
                    item.text = action.val;
                    item.state = action.state;
                }
            })
            break;
        case TO_SEARCH_ACTION:
            newState.searchVal = action.val;
            break;
        case TO_INIT_TODO_ACTION:
            newState.todos = action.datas.todos;
            newState.searchVal = action.datas.searchVal;
            newState.inputVal = action.datas.inputVal;
            break;
        case TO_DELETE_TODO_ACTION:
            newState.todos.forEach((item, index) => {
                if(parseInt(item.id) === parseInt(action.id)) {
                    newState.todos.splice(index, 1)
                }
            })
            break;
        default:
            break;
    }
    sessionStorage.globalData = JSON.stringify(newState);
    return newState;
}
