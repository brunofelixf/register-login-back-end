import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validatorDataMiddleware = (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data);
      req.body = validatedData;
      next();
    } catch ( error ) {
      return res.status(400).json({ message: error.errors });
    }
  };
export { validatorDataMiddleware };
