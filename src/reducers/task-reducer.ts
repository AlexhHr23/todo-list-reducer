import { v4 as uuidv4 } from 'uuid';
import type { DrafTask, Priority, Task } from "../types";
import {TASK_STATUS } from '../data/status';

export type TaskActions =
    { type: 'add-task', payload: { task: DrafTask } } |
    { type: 'show-modal'} |
    { type: 'close-modal'} |
    { type: 'update-task', payload: { id: Task['id'] } } |
    { type: 'chage-status', payload: { id: Task['id'] } } |
    { type: 'delete', payload: { id: Task['id'] } } |
    { type: 'reset' } |
    { type: 'addFilterPriority', payload: { id: Priority['id'] } }

export type TaskState = {
    tasks: Task[]
    modal: boolean
    editingId: string
    currentTypeTask: Priority['id']
}

const initalTasks = () => {
    const localStorageTask = localStorage.getItem('tasks')
    return localStorageTask ? JSON.parse(localStorageTask) : []
}

export const InitialState: TaskState = {
    tasks: initalTasks(),
    modal: false,
    editingId: '',
    currentTypeTask: '',
}

const createTask = (drafTask: DrafTask) : Task => {
    return {
        ...drafTask,
        id: uuidv4(),
        status: TASK_STATUS.PENDING
    }
}

export const taskReducer = (
    state: TaskState = InitialState,
    action: TaskActions
) => {

    if (action.type === 'add-task') {
       const newTask = createTask(action.payload.task)
        return {
            ...state,
            tasks: [...state.tasks, newTask],
            modal: false
        }
    }

     if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

      if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if (action.type === 'update-task') {

        return {
            ...state
        }
    }

      if (action.type === 'chage-status') {
        const tasks = state.tasks.map(task => {
            if(task.id === action.payload.id){
                return {
                    ...task,
                    status: task.status === 'pending' ? TASK_STATUS.COMPLETE : TASK_STATUS.PENDING
                }
            } else 
                return task
        })

        return {
            ...state,
            tasks
        }
    }

    if (action.type === 'delete') {

        const updatedTasks = state.tasks.filter(task => task.id !== action.payload.id)

        return {
            ...state,
            tasks: updatedTasks
        }
    }

    if (action.type === 'reset') {

        return {
            ...state,
            tasks: [],
            currentTypeTask: ''
        }
    }

    if (action.type === 'addFilterPriority') {

        return {
            ...state
        }
    }

    return state
}