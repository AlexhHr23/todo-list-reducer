import { useEffect } from "react"
import AddTask from "./components/AddTask"
import { TaskList } from "./components/TaskList"
import { TaskModal } from "./components/TaskModal"
import { TaskProgress } from "./components/TaskProgress"
import { useTask } from "./hooks/useTask"



function App() {

  const { state } = useTask()

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state])


  const pendingTask = state.tasks.filter(
    task => task.status === 'pending'
  );

  const completeTask = state.tasks.filter(
    task => task.status === 'complete'
  );

  return (
    <>
      <header className="bg-slate-100 shadow-lg py-10 max-h-72">
        <h1 className="uppercase text-center font-bold text-4xl"> Task Flow</h1>
      </header>

      <div className="max-w-5xl mx-auto rounded-lg mt-10 p-10 flex flex-col gap-5">
        <div>
          <h1 className="uppercase text-4xl font-bold mb-2">Mi día</h1>
          <p>Organiza y conquista tus metas con serenidad</p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <TaskProgress />
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <AddTask />
          <TaskModal />
        </div>

        <main>
          <TaskList
            label="Pendientes"
            tasks={pendingTask}
          />
          <TaskList
            label="Completadas"
            tasks={completeTask}
          />
        </main>
      </div>
    </>
  )
}

export default App
