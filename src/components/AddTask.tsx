
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { PriorittyOption } from "./PriorittyOption"
import { priorities } from "../data/priorities"
import { useTask } from "../hooks/useTask"

export default function AddTask() {

    const {dispatch} = useTask()

    return (
        <div className="flex flex-col gap-5">

            <div className="flex items-center gap-1">
                <PlusCircleIcon className="h-5 w-5" />
                <p className="text-base text-gray-500">
                    Añadir una nueva tarea para hoy...
                </p>
            </div>

            <div className="flex  flex-col sm:flex-row gap-1 items-center justify-between ">
                <div className="flex gap-2">
                    {priorities.map(prority => (
                        <PriorittyOption
                            key={prority.id}
                            color={prority.color}
                            label={prority.name}
                        />
                    ))}
                </div>
                <div className="">
                    <button
                        className="bg-indigo-600 p-2 text-white rounded-lg cursor-pointer"
                        onClick={() => dispatch({type: 'show-modal'})}
                    >
                        Añadir
                    </button>
                </div>
            </div>


        </div>
    )
}

