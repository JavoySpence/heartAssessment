import express from "express";
import {tasks} from "./routes/taskRoutes.js"; 

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/v1/task', tasks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
