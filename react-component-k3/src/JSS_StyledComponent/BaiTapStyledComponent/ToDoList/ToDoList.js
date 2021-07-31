import React, { Component } from 'react';
import { Container } from '../../ComponentsToDoList/Container';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
import { TextField, Label, Input } from '../../ComponentsToDoList/TextField';
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../../Theme/ToDoListDarkTheme';
import { ToDoListLightTheme } from '../../Theme/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../Theme/ToDoListPrimaryTheme';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Tr, Td, Th, Thead, Tbody } from '../../ComponentsToDoList/Table';
import { connect } from 'react-redux';
import { addTaskAction, changeThemeAction, deleteTaskAction, doneTaskAction, editTaskAction } from '../../../redux/actions/ToDoListActions';
import { arrTheme } from '../../../JSS_StyledComponent/Theme/ThemeManager'
class ToDoList extends Component {
    state = {
        taskName: ''
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(editTaskAction(task))
                    }} className="ml-1"><i className="fa fa-edit"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(doneTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-check"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        })
    }
    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        })
    }
    // có thể ghi đúng chuẩn theo cách này hoặc ghi trực tiếp, ở đây do chỉ có 1 trường nên ghi trực tiếp
    // handleChange = (e) => {
    //     let { name, value } = e.target.value;
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // Viết hàm render theme import ThemeManager
    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option value={theme.id}>
                {theme.name}
            </option>
        })
    }
    // Life cycle bảng 16 nhận vào props mới được thực thi trước render
    componentWillReceiveProps(newProps) {
        console.log('this.props', this.props);
        console.log('newProps', newProps);
        this.setState({
            taskName: newProps.taskEdit.taskName
        })
    }
    render() {
        return (
            <div>
                <ThemeProvider theme={this.props.themeToDoList}>
                    <Container className="w-50">
                        <Dropdown onChange={(e) => {
                            let { value } = e.target;
                            // Dispatch value lên reducer

                            // this.props.dispatch({
                            //     type: 'change_theme',
                            //     themId: value
                            // })

                            // Viết lại bằng action creator
                            this.props.dispatch(changeThemeAction(value))
                        }}>
                            {this.renderTheme()}
                        </Dropdown>
                        <Heading3>To do list</Heading3>
                        {/* <Label>Task name</Label>
                        <Input></Input> */}
                        <TextField value={this.state.taskName} onChange={(e) => {
                            this.setState({

                                // [e.target.name]:e.target.value   // cách ghi đầy đủ
                                taskName: e.target.value
                            }, () => {
                                console.log(this.state);
                            })
                        }} name="taskName" label="Task name" className="w-50">
                        </TextField>
                        <Button onClick={() => {
                            // Lấy thông tin người dùng nhập vào từ input
                            let { taskName } = this.state;
                            // Tạo ra 1 task object
                            let newTask = {
                                id: Date.now(),
                                taskName: taskName,
                                done: false
                            }
                            console.log('task', newTask);
                            // Đưa task object lên redux thông qua phương thức dispatch
                            this.props.dispatch(addTaskAction(newTask))
                        }

                        } className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                        <Button className="ml-2"><i className="fa fa-upload"></i> Update task</Button>
                        <hr />
                        <Heading3>Task to do</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskToDo()}
                            </Thead>
                        </Table>
                        <Heading3>Task completed</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskCompleted()}
                            </Thead>
                        </Table>
                    </Container>
                </ThemeProvider>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}

export default connect(mapStateToProps)(ToDoList);