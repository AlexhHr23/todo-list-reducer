import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export const TaskProgress = () => {

    const progress = 50

    return (
        <div className="flex flex-col gap-5">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                <div className="w-20 h-20 shrink-0 mx-auto sm:mx-0">
                    <CircularProgressbar
                        value={progress}
                        styles={buildStyles({
                            trailColor: "#4F46E5",
                            textSize: 20,
                        })}
                        text={`${progress}%`}
                    />
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-xl">
                        3 de 8 tareas completadas
                    </h3>

                    <p className="text-base text-gray-500">
                        Buen ritmo de trabajo. Estás a 5 tareas de terminar
                        tu jornada libre de pendientes.
                    </p>
                </div>

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