import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Theme/ToDoListDarkTheme"
import { ToDoListLightTheme } from '../../JSS_StyledComponent/Theme/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../JSS_StyledComponent/Theme/ToDoListPrimaryTheme';
import { add_task } from "../types/ToDoListTypes";
import { change_theme } from "../types/ToDoListTypes";
import { arrTheme } from '../../JSS_StyledComponent/Theme/ThemeManager';

const initialState = {
    themeToDoList: ToDoListPrimaryTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false },
    ]
}



export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            // console.log('todo', action.newTask)
            // Kiểm tra rỗng
            if (action.newTask.taskName.trim() === '') {
                alert('Task name is required!');
                return { ...state }
            }
            // Kiểm tra tồn tại
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert('task name already exits !');
                return { ...state }
            }
            taskListUpdate.push(action.newTask);
            // Xử lý xong thì gán taskList mới vào taskList
            state.taskList = taskListUpdate;
            return { ...state }
        }
        case change_theme: {
            // console.log(action)
            // Tìm theme dựa vào action.themeId được chọn
            let theme = arrTheme.find(theme => theme.id == action.themeId);
            console.log(theme);
            if (theme) {
                // set lại theme cho state.themeToDoList
                state.themeToDoList = { ...theme.theme }
            }
            return { ...state }
        }

        default:
            return { ...state }
    }
}
