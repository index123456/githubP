import React, {Fragment, useContext, useEffect, useState} from "react";
import {Form, Popconfirm, Table, Tooltip} from "antd";
import "./TodoList.css";
import {stateContext} from '../../store/store';
import {cancel, deleteTodo, initData, save, windowScrollTo} from './todoListEvent';
import {TO_DELETE_TODO_ACTION, TO_EDIT_TODO_ACTION, TO_INIT_TODO_ACTION} from '../../store/actionType';
import EditableCell from "./edit";

function TodoList() {
    const {globalState, dispatch} = useContext(stateContext);
    const {todos, searchVal} = globalState;
    const realData = todos.filter(todo => {
        return todo.text.indexOf(searchVal) !== -1;
    })
    const [form] = Form.useForm();
    const [selectState, setSelectState] = useState(null);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = todo => todo.id === editingKey;
    const edit = todo => {
        form.setFieldsValue({
            text: '',
            state: '',
            ...todo,
        });
        setEditingKey(todo.id);
    };

    //列表头
    const columns = [
        {
            title: '待办事项',
            dataIndex: 'text',
            width: '40%',
            editable: true,
            ellipsis: {
                showTitle: false,
            },
            render: (text) => {
                return (
                    <Tooltip placement="topLeft" title={text}>
                        {text}
                    </Tooltip>
                )
            }
        },
        {
            title: '状态',
            dataIndex: 'state',
            width: '20%',
            render: (_, todo) => {
                return <Fragment>{todo.state ? '已完成' : '未完成'}</Fragment>
            },
            editable: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, todo) => {
                const editable = isEditing(todo);
                return editable ? (
                    <span>
            <a
                href="#!"
                onClick={() => save(todo.id, form, setEditingKey, dispatch, TO_EDIT_TODO_ACTION, selectState)}
                style={{
                    marginRight: 8,
                }}
            >
              保存
            </a>
            <Popconfirm
                title="取消编辑?"
                onConfirm={() => {cancel(setEditingKey)}}
                cancelText='点错了'
                okText='是的'
            >
              <a  href="#!">取消</a>
            </Popconfirm>
          </span>
                ) : (
                    <span>
                        <a
                            href="#!"
                            disabled={editingKey !== ''}
                            onClick={() => edit(todo)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            编辑
                        </a>
                        <Popconfirm
                            title="确认删除?"
                            cancelText='点错了'
                            okText='是的'
                            onConfirm={() => deleteTodo(todo.id, TO_DELETE_TODO_ACTION, dispatch)}>
                            <a href="#!">删除</a>
                        </Popconfirm>
                    </span>
                );
            },
        }
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: todo => ({
                todo,
                inputType: col.dataIndex === 'text' ? 'text' : 'state',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(todo),
                selectState,
                setSelectState
            }),
        };
    });

    useEffect(() => {
        initData(dispatch, TO_INIT_TODO_ACTION);
        windowScrollTo();
    }, []);

    return (
        <div className="todos_container">
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={realData}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={false}
                    rowKey={todo => todo.id}
                />
            </Form>
        </div>
    )
}

export default TodoList;
