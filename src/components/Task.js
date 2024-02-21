import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import Button from 'react-bootstrap/Button';


const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
};

const handleEditTask = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
};

return (
    <div>
        {isEditing ? (
        <>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />&nbsp;
            <Button variant="success" onClick={handleEditTask}>Save</Button>{' '}
        </>
        ) : (
        <>
            <span>{task.description}</span>&nbsp;
            <Button variant="warning" onClick={() => setIsEditing(true)}>Edit</Button>{' '}&nbsp;
            <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>
        </>
        )}
    </div>
);
};

export default Task;
