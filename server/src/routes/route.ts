import  { Router } from 'express'
import {
    rootRoute
} from '../controllers/controllers.root'
import {
    rootSignIn,
    rootSignUp
} from '../controllers/controllers.auth'


export const appRouter: Router = Router()

appRouter.get( '/', rootRoute )

appRouter.get( '/login', rootSignIn )
appRouter.get( '/register', rootSignUp )