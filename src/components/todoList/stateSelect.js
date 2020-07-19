import React from 'react';
import {Select} from "antd";

const StateSelect = ({todo, setSelectState}) => {
    const { Option } = Select;
    function handleChange(value) {
        setSelectState(value);
    }

    return (
        <Select defaultValue={todo.state} style={{ width: 120 }} onChange={handleChange}>
            <Option value={true}>已完成</Option>
            <Option value={false}>未完成</Option>
        </Select>
    )
}

export default StateSelect;
