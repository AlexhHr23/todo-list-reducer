import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useTask } from "../hooks/useTask"

export const TaskProgress = () => {

    const { totalTask, completedTasks, pendingTasks, dispatch } = useTask()

    const progress = totalTask > 0 ? +((completedTasks / totalTask) * 100).toFixed(2) : 0

    return (
        <div className="flex flex-col gap-5">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                <div className="w-20 h-20 shrink-0 mx-auto sm:mx-0">
                    <CircularProgressbar
                        value={progress}
                        styles={buildStyles({
                            pathColor: "#4F46E5",
                            trailColor: "#F5F5F5",
                            textSize: 20,
                            backgroundColor: ''
                        })}
                        text={`${progress}%`}
                    />
                </div>

                <div className="flex-1 text-center sm:text-left">
                    {totalTask === 0
                        ? <p>Agrega tareas para seguir tu progreso</p>
                        : (

                            <>
                                <h3 className="font-semibold text-xl">
                                    {`${completedTasks} de ${totalTask} tareas completadas`}
                                </h3>

                                <p className="text-base text-gray-500">
                                    {pendingTasks === 0
                                        ? '¡Genial! ¡Terminaste todos tus pendientes!'
                                        : `Buen ritmo de trabajo. Estás a ${pendingTasks} ${pendingTasks > 1 ? 'tareas' : 'tarea'} de terminar
                                    tu jornada libre de pendientes.`
                                    }
                                </p>
                            </>
                        )
                    }
                </div>

                <button
                    className="bg-indigo-500 text-white rounded-lg p-2 text-center sm:shrink-0 cursor-pointer"
                    onClick={() => dispatch({type: 'reset'})}
                >
                    Resetear
                </button>

                <div className="bg-gray-300 rounded-lg p-2 text-center sm:shrink-0">
                    Vas por buen camino
                </div>



            </div>


            <div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                        className="h-2 rounded-full bg-indigo-600"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

        </div>
    )
}