import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import Button from 'react-bootstrap/Button';


const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
    dispatch(addTask({ description, isDone: false }));
    setDescription('');
};

return (
    <div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />&nbsp;
        <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
    </div>
);
};

export default AddTask;