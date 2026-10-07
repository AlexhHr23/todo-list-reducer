import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { DrafTask } from "../types"
import { useTask } from "../hooks/useTask"
import { listStatus } from "../data/status"
import { priorities } from "../data/priorities"
import { ErrorMessage } from "./ErrorMessage"

export const TaskForm = () => {

  const [task, setTask] = useState<DrafTask>({
    description: '',
    status: '',
    priority: ''
  })

  const [error, setError] = useState('')

  const { dispatch, state } = useTask()

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    setTask({
      ...task,
      [name]: value
    })
  }


  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (state.editingId) {
      if (Object.values(task).includes('')) {
        setError('Todos los campos son obligarios')
        return
      }
    }

    if (task.description === '' || task.priority === '') {
      setError('Todos los campos son obligatorios')
      return
    }

    if (state.editingId) {
      dispatch({
        type: 'update-task',
        payload: { id: state.editingId }
      })
    } else {
      dispatch({
        type: 'add-task',
        payload: { task }
      })
    }
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        {state.editingId ? 'Guardar tarea' : 'Nueva tarea'}
      </legend>

    {error && (
      <ErrorMessage>
        {error}
      </ErrorMessage>
    )}

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-xl">
          Descripción
        </label>
        <input
          type="text"
          id="description"
          placeholder="Añade la descripción"
          className="bg-slate-100 p-2"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>

      {state.editingId && (
        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-xl">
            Descripción
          </label>
          <select
            id="status"
            className="bg-slate-100 p-2"
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="">-- Seleccione una opción</option>
            {listStatus.map(status => (
              <option id={status.status} value={status.status}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      )}


      <div className="flex flex-col gap-2">
        <label htmlFor="priority" className="text-xl">
          Prioridad
        </label>
        <select
          id="priority"
          className="bg-slate-100 p-2"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="">-- Seleccione una opción</option>
          {priorities.map(priority => (
            <option id={priority.id} value={priority.id}>
              {priority.name}
            </option>
          ))}
        </select>
      </div>

      <input
        className="bg-blue-600 cursor-pointer p-2 w-full text-white uppercase  font-bold text-center rounded-lg"
        value={state.editingId ? 'Guardar cambios' : 'Registrar tarea'}
        type="submit"
      />
    </form>
  )
}
