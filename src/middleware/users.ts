import { Request, Response, NextFunction } from 'express';
import { User, UserSchema } from '../models/User';
export default (req: Request, res: Response, next:NextFunction) => {
    const user: User = req.body;
    const validation = UserSchema.validate(user);
    if (validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
    //req.body
    //llamar a la fncion de validar esta en user schema
    //validar
    //si no es valida retornar 400
    // si es valida llamar a la siguiente funcion
}