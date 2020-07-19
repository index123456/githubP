import React, {useReducer} from 'react';
import {stateContext, theReducer} from '../../store/store';

function IndexGlobalState(props) {
    const [globalState, dispatch] = useReducer(theReducer, {
        todos: [],
        searchVal: '', //搜索的数据
        inputVal: '', //添加框的数据
    })

    return (
        <stateContext.Provider value={{globalState, dispatch}}>
            {props.children}
        </stateContext.Provider>
    )
}

export default IndexGlobalState;


// todos: [
//     { id: 0, text: '事件0', state: true },
//     { id: 1, text: '事件1', state: true },
//     { id: 2, text: '事件2', state: true },
//     { id: 3, text: '事件3', state: true },
//     { id: 4, text: '事件4', state: true },
//     { id: 5, text: '事件5', state: true },
//     { id: 6, text: '事件6', state: true },
//     { id: 7, text: '事件7', state: true },
//     { id: 8, text: '事件8', state: true },
//     { id: 9, text: '事件9', state: true },
//     { id: 10, text: '事件10', state: false },
//     { id: 11, text: '事件11', state: false },
//     { id: 12, text: '事件12', state: false },
//     { id: 13, text: '事件13', state: false },
//     { id: 14, text: '事件14', state: false },
//     { id: 15, text: '事件15', state: false },
//     { id: 16, text: '事件16', state: false },
//     { id: 17, text: '事件17', state: false },
//     { id: 18, text: '事件18', state: false },
//     { id: 19, text: '事件19', state: false },
//     { id: 20, text: '事件20', state: false },
//     { id: 21, text: '事件21', state: false },
//     { id: 22, text: '事件22', state: false },
//     { id: 23, text: '事件23', state: false },
//     { id: 24, text: '事件24', state: false },
//     { id: 25, text: '事件25', state: false },
//     { id: 26, text: '事件26', state: false },
//     { id: 27, text: '事件27', state: false },
//     { id: 28, text: '事件28', state: false },
//     { id: 29, text: '事件29', state: false },
//     { id: 30, text: '事件30', state: false },
//     { id: 31, text: '事件31', state: false },
//     { id: 32, text: '事件32', state: false },
//     { id: 33, text: '事件33', state: false },
//     { id: 34, text: '事件34', state: false },
//     { id: 35, text: '事件35', state: false },
//     { id: 36, text: '事件36', state: false },
//     { id: 37, text: '事件37', state: false },
//     { id: 38, text: '事件38', state: false },
//     { id: 39, text: '事件39', state: false },
//
// ],
