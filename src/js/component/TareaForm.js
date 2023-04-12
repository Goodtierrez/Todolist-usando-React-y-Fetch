import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";


const TareaForm = () => {

    /* variable de estado para controlar lo que se ingresa en formulario*/

    const [input, setInput] = useState('');

    /* función para cambiar el valor del input cada vez que hacemos algún cambio en el input */

    const handleInput = (e) => {

        setInput(e.target.value);
    }
        ;
    /* variable de estado para almacenar en un array vacío todas las tasks que vamos añadiendo*/
    const [tasks, setTasks] = useState([]);
    /* función que evita que la página se recarge en cada submit, crea un nuevo array con las tareas que ya había + la nueva que acabamos de meter y que deja el formulario vacía cuando hacemos el submit */
    const handleSubmit = (e) => {

        e.preventDefault();
        setTasks([...tasks, input]);
        setInput('');
        setTasksLeft(tasksLeft + 1);

    };

    /* función para borrar la tarea, nos crea una variable nueva sin la task que hemos borrado*/

    const removeTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
        setTasksLeft(tasksLeft - 1)

    };

    /* Variable de estado para marcar cuántas tasks pendientes nos quedan */

    const [tasksLeft, setTasksLeft] = useState(0);

    const handleTasksLeft = () => {

        setTasksLeft(tasksLeft + 1);

    };


    return (

        <div className="listaDeTareas-container">

            <h1>TODOS</h1>

            <form onSubmit={handleSubmit}>

                <input type="text" className="input-container" onChange={handleInput} value={input} placeholder="Añadir tarea"></input>


            </form>

            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li className="list-group-item" key={index}>
                        {task}
                        <span className="eliminar" onClick={() => removeTask(index)}>
                            <AiOutlineCloseCircle />
                        </span>

                    </li>



                ))}
            </ul>


            <p className="taskLeft">{tasksLeft} tareas pendientes</p>
            {tasksLeft === 0 ? (
                <h2 className="display-none">No hay tareas, añadir tareas</h2>
            ) : (
                <></>
            )}

        </div>
    );
};

export default TareaForm;