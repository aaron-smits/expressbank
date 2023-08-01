import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.post('/token', (req: Request, res: Response) => {
    res.send('Token');
});

app.get('/accounts', (req: Request, res: Response) => {
    res.send('Accounts');
});

app.post('/accounts', (req: Request, res: Response) => {
    res.send('Accounts');
});

app.get('/accounts/:id', (req: Request, res: Response) => {
    res.send(`Accounts ${req.params.id}`);
});

app.put('/accounts/:id', (req: Request, res: Response) => {
    res.send(`Accounts ${req.params.id}`);
});

app.post('/transfer', (req: Request, res: Response) => {
    res.send('Transfer');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});