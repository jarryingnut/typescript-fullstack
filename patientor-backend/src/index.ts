import express from 'express';
import cors from "cors";
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);


app.get('/api/ping', (_req, res) => {
    res.send('ping pong pingu');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});