import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./app.css";
import TodoListIndex from './Views/index';


function App() {
    return (
        <div className="app">
            <TodoListIndex />
        </div>
    );
}

export default App;
