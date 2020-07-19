import React, {useState, useContext, useEffect} from "react";
import {stateContext} from '../../store/store';
import "./topNav.css";
import {Input, Button} from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import {toAdd, addInput, toSearch, searchInput} from './topNavEvent';
import {TO_ADD_ACTION, TO_SEARCH_ACTION} from '../../store/actionType';

function TopHead() {
    const {globalState, dispatch} = useContext(stateContext);
    const {searchVal} = globalState;
    const [search, setSearch] = useState('');
    const [add, setAdd] = useState('');

    useEffect(() => {
        setSearch(searchVal);
    }, [searchVal])

    return (
        <div className="nav">
            <h1>TODOLIST</h1>
            <div className='addInput'>
                <Input
                    size="large"
                    placeholder="添加待办事项"
                    onChange={(e) => {
                        addInput(e, setAdd)
                    }}
                    value={add}
                />
                <Button
                    size='large'
                    icon={<PlusCircleOutlined />}
                    onClick={() => {
                        toAdd(add, setAdd, dispatch, TO_ADD_ACTION)
                    }}
                >添加</Button>
            </div>
            <div className='searchInput'>
                <Input
                    size="large"
                    placeholder={`搜索待办事项${searchVal ? '(当前为' + searchVal + ')' : ''}`}
                    onChange={(e) => {
                        searchInput(e, setSearch)
                    }}
                    value={search}
                />
                <Button
                    size='large'
                    icon={<SearchOutlined />}
                    onClick={() => {
                        toSearch(search, dispatch, TO_SEARCH_ACTION)
                    }}
                >搜索</Button>
            </div>
        </div>
    )
}

export default TopHead;
