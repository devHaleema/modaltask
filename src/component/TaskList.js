import React from 'react';
//import { Button, } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "././App.css";


function TaskList({ allTasks, handleModal }) {
    return (
        <>
            <ol>
                {allTasks.map(({ title, description, id }) => (
                    <li key={id}>

                        {title}
                        <button className="butt" onClick={() => handleModal(id)}>X</button>

                        {!description ? null : <p>{description}</p>}
                    </li>
                ))}
            </ol>
        </>
    );

}

export default TaskList;