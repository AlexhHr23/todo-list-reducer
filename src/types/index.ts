

export type Task = {
    id: string, 
    description: string,
    status: string,
    priority: string
}

export type DrafTask = Omit<Task, 'id'>

export type Priority = {
    id: string,
    name: string,
    color: string,
}

export type Status = {
    status: string,
    name: string
}