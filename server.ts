import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GENAI_KEY);
const app = express();
const port: number = 3000;

let name: string = '';

app.use(cors());
app.use(express.json());

app.get('/getName', async (req: Request, res: Response) => {
    try {
        const { ClientName } = req.body; 
        name = ClientName;
        return res.status(200).json({
            menubarMsg: 'get name successfully',
            name
        });
    } catch (error) {
        return res.status(500).json({
            menubarMsg: 'get name err',
            errorMsg: error
        });
    }
});

app.post('/ChatBot', async (req: Request, res: Response) => {
    try {
        const { prorm } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const response = await model.generateContent([prorm]);
        return res.status(200).json({
            message: 'get data from gemini',
            GenAIMsg: response
        });
    } catch (error) {
        return res.status(500).json({
            message: 'get data from gemini err',
            errMsg: error
        });
    }
});


app.listen(port, () => {
    try {
        console.log(`server runing port: ${port}`);
    } catch (error) {
        console.log(`server err ${error}`);
        
    }
});


