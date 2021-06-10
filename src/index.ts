import express, { Request, Response } from "express";
import { authRouter } from "./router/auth";

const app = express()
const port: number = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express API V1')
})

app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
})