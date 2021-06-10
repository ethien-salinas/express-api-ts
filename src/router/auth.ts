import express, { Request, Response } from "express";
import { AuthController } from '../controller/AuthController'

let authController: AuthController

export const authRouter = express.Router()

authRouter.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  authController = new AuthController()
  const result = await authController.signup(name, email, password)
  res.send(result)
})