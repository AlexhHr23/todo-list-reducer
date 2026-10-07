import { createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { InitialState, taskReducer, type TaskActions, type TaskState } from "../reducers/task-reducer"


type TaskContextProps = {
    state: TaskState,
    dispatch: Dispatch<TaskActions>
}

type TaskProviderProps = {
    children: ReactNode
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

export const TaskProvider = ({children} : TaskProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, InitialState)

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}