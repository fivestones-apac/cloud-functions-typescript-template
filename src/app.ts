import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Request, Response } from "express";

export const helloWorld: HttpFunction = (req: Request, res: Response) => {
  res.send('Hello, World');
};

export const echoReqHeaders: HttpFunction = (req: Request, res: Response) => {
  res.send(JSON.stringify(req.headers));
};