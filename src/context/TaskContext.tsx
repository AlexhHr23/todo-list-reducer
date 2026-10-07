import { createContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react"
import { InitialState, taskReducer, type TaskActions, type TaskState } from "../reducers/task-reducer"


type TaskContextProps = {
    state: TaskState,
    dispatch: Dispatch<TaskActions>
    totalTask: number
    completedTasks: number
    pendingTasks: number
}

type TaskProviderProps = {
    children: ReactNode
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

export const TaskProvider = ({children} : TaskProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, InitialState)

    const totalTask = useMemo(() => state.tasks.length, [state.tasks])
    const completedTasks = useMemo(() => state.tasks.filter(task => task.status === 'complete').length, [state.tasks])
     const pendingTasks = useMemo(() => state.tasks.filter(task => task.status === 'pending').length, [state.tasks])

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
                totalTask,
                completedTasks,
                pendingTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}