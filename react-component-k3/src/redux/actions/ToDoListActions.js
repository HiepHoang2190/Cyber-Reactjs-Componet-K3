import { add_task } from "../types/ToDoListTypes";
import { change_theme } from "../types/ToDoListTypes";
export const addTaskAction = (newTask) => ({
    type: add_task,
    newTask
})

export const changeThemeAction = (themeId) => ({
    type: change_theme,
    themeId
})
