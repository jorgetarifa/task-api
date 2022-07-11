
import Joi, { string } from 'joi'

const tasksSchema = Joi.object ({
 
   task: Joi.string().required(),
   image: Joi.string().required(),
   priority: Joi.string().required(),
   deadline: Joi.string().required()
   
})


export default tasksSchema