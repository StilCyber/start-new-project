import { Router } from "express";
import express, {Request, Response} from 'express'
export const addressesRouter = Router()

const adresses = [{id: 1, value: 'Nezalejnasti 12'}, {id: 2, value: 'Selickaga 11'}]

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(adresses)
 })
 addressesRouter.get('/:id', (req: Request, res: Response) => {
    let adress = adresses.find(p => p.id === +req.params.id)
    if(adress) {
       res.send(adress)
    } else {
       res.send(404)
    }
 })