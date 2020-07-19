import React from 'react';
import IndexGlobalState from "../components/indexGlobalState/indexGlobalState";
import TopHead from "../components/topNav/topNav";
import TodoList from "../components/todoList/TodoList";

function TodoListIndex() {
    return (
        <IndexGlobalState>
            <TopHead />
            <TodoList />
        </IndexGlobalState>
    )
}

export default TodoListIndex;
