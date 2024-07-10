import { Request, Response } from "express";

export function teste (req: Request, res: Response) {
    return res.send('OK')
}