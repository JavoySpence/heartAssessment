import {pool} from "../data/dbConnection.js";


export const getAllTasks = async (req, res, next) => {
    const result = await pool.query("SELECT * FROM tasks");

    res.status(200).json({
        message: 'Tasks retrieved successfully',
        data: result
    })
}


export const getSingleTask = async (req, res, next) => {
    const id = req.params.id

    const result = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

    res.status(200).json({
        message: 'Task retrieved successfully',
        data: result[0]
    })
}


export const deleteTask = async (req, res, next)=> {
    const id = req.params.id
    const result = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    res.status(200).json({
      message: 'Tasks deleted successfully',
      data: result[0]
    })

}


export const createTask = async (req, res, next )=> {
    
    const newEntry = new Object()
    newEntry.task =  req.body.task
    newEntry.time = req.body.time
    newEntry.status = req.body.status

    const result = await pool.query("INSERT INTO tasks VALUES (?, ?, ?)",
    [newEntry.task, newEntry.time, newEntry.status]);

    res.status(200).json({
      message: 'Tasks added successfully',
      data: result[0]
    })
}


export const updateTasks = async (req, res, next )=> {
    
    const id = req.params.id

    const newEntry = new Object()
    newEntry.task =  req.body.task
    newEntry.time = req.body.time
    newEntry.status = req.body.status

    const result = await pool.query("UPDATE tasks SET task = ?, time = ? status = ? WHERE id = ?",
    [newEntry.task, newEntry.time, newEntry.status, id ]);

    res.status(200).json({
      message: 'Tasks updated successfully',
      data: result[0]
    })
}

