import express from 'express'
import {
    getAllTasks, 
    getSingleTask, 
    deleteTask, 
    createTask, 
    updateTasks
} from "../controllers/taskControllers.js";

export const tasks = express.Router();

tasks
    .route('/')
    .get(getAllTasks)      // Get all tasks
    .post(createTask);     // Create a new task

tasks
    .route('/:id')
    .get(getSingleTask)    // Get a single task by ID
    .put(updateTasks)      // Update a task by ID
    .delete(deleteTask);


