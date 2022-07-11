
import { Request, Response } from 'express'

export const rootSignIn  = ( req: Request, res: Response ) => {
    res.send('Hola from Sign In')
}

export const rootSignUp = ( req: Request, res: Response ) => {
    res.send('Hola from Sign Up')
}
