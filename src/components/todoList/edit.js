import React from 'react';
import {Form, Input} from "antd";

import StateSelect from "./stateSelect";

const EditableCell = ({editing, dataIndex, title, inputType, todo, index, children, selectState, setSelectState,  ...restProps}) => {
    const inputNode = inputType === 'state' ? <StateSelect selectState={selectState} setSelectState={setSelectState} todo={todo} /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `请填写${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
}

export default EditableCell;
