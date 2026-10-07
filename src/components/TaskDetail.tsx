import { CheckIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useTask } from "../hooks/useTask";
import { priorities } from "../data/priorities";
import type { Task } from "../types";

interface TaskDetailProps {
  task: Task;
}

export const TaskDetail = ({ task }: TaskDetailProps) => {
  const { dispatch } = useTask();

  const priorityInfo = priorities.find(
    (priority) => priority.id === task.priority
  );

  const isComplete = task.status === "complete";

  const handleChangeStatus = () => {
    dispatch({
      type: 'chage-status',
      payload: { id: task.id },
    });
  };

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md">
      <button
        type="button"
        onClick={handleChangeStatus}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          isComplete
            ? "border-green-500 bg-green-500 text-white"
            : "border-slate-300 hover:border-slate-400"
        }`}
      >
        {isComplete && <CheckIcon className="h-4 w-4" />}
      </button>

      <p
        className={`flex-1 ${
          isComplete ? "text-slate-400 line-through" : "text-slate-700"
        }`}
      >
        {task.description}
      </p>

      {priorityInfo && (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          {priorityInfo.name}
        </span>
      )}
      <button
        type="button"
        onClick={() => dispatch({type: 'delete', payload: {id: task.id}})}
        className="cursor-pointer"
      >
        <TrashIcon className="h-4 w-4" color="red"/>
      </button>
      <button
        type="button"
        onClick={() => dispatch({type: 'set-editingId', payload: {id: task.id}})}
        className="cursor-pointer"
      >
        <PencilIcon className="h-4 w-4" color="blue"/>
      </button>
    </div>
  );
};