//添加框按钮被点击，更改值
export const toAdd = (...args) => {
    const [val, setVal, dispatch, type] = args;
    if(val) {
        dispatch({type, val});
        setVal('');
        console.log(val);
    }
}
//添加框输入
export  const addInput = (e, setAdd) => {
    setAdd(e.target.value);
}
//搜索框按钮被点击，更改搜索的值
export const toSearch = (...args) => {
    const [val, dispatch, type] = args;
    dispatch({type, val});
}

//搜索框输入
export const searchInput = (e, setSearch) => {
    console.log(e.target.value)
    setSearch(e.target.value)
}
