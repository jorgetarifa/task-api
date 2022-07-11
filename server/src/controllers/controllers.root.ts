import { Request, Response } from 'express'

export const rootRoute = ( req:Request, Res: Response ) => {
    Res.json({message: "Welcome to Tasks API"})

}