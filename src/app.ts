import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Request, Response } from "express";

export const helloWorld: HttpFunction = (req: Request, res: Response) => {
  res.send('Hello, World');
};
