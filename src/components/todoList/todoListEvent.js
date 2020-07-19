export const cancel = (setEditingKey) => {
    setEditingKey('');
}

export const save = async (...args) => {
    try {
        const [key, form, setEditingKey, dispatch, type, selectState] = args;
        const row = await form.validateFields();
        dispatch({
            type,
            index: key,
            val: row.text,
            state: selectState
        })
        setEditingKey('');
    } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
    }
};

export const deleteTodo = (id, type, dispatch) => {
    dispatch({type, id});
}

export const initData = (dispatch, TO_INIT_TODO_ACTION) => {
    if(sessionStorage.globalData) {
        const datas = JSON.parse(sessionStorage.globalData);
        dispatch({
            datas,
            type: TO_INIT_TODO_ACTION
        });
    } else {
        const datas = {
            todos: [],
            searchVal: '', //搜索的数据
            inputVal: '', //添加框的数据
        }
        for(let i=0; i<40; i++) {
            const data = {
                id: i,
                text: `事件${i}`,
                state: i%2 === 0
            }
            datas.todos.push(data);
        }
        dispatch({
            datas,
            type: TO_INIT_TODO_ACTION
        });
    }
}

export const windowScrollTo = () => {
    window.addEventListener('scroll', () => {
        sessionStorage.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    })
    if(sessionStorage.scrollTop) {
        window.scrollTo({
            top: sessionStorage.scrollTop,
            behavior: 'smooth',
        });
    }
}
