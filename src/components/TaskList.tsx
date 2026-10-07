import { useMemo } from "react"
import type { Task } from "../types"
import { TaskDetail } from "./TaskDetail"

type TaskListProps = {
    label: string
    tasks: Task[]
}

export const TaskList = ({ label, tasks }: TaskListProps) => {

    const isEmpty = useMemo(() => tasks.length === 0, [tasks])

    return (
        <div className="mt-10 flex flex-col gap-2">
            <h1>{label}</h1>
            {isEmpty
                ? <p>{`No hay tareas ${label}`}</p>
                : (tasks.map(task => (
                    <TaskDetail key={task.id} task={task} />
                )))
            }
        </div>
    )
}
