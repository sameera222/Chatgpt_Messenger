import { query } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    // res.status(200).json({name: 'jhon Doe'})
const {prompt, chatId, session, model } = req.body;

    if(!prompt){
        res.status(400).json({
            answer:'Please provide a prompt!'
        })
        return;
    }

    if(!chatId){
        res.status(400).json({
            answer: 'Please provide a valid chat ID'
        })
        return;
    }
//ChatGpt query
const response = await query(prompt, chatId, model)
    // res.status(200).json({name: 'Jhon Doe'})
}

  