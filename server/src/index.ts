import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDb from './mongodb/connect';
import postRoutes from './routes/postRoutes';
import dalleRoutes from './routes/dalleroutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/',async (req, res)=> {
res.send("Hello from DALL-E");
});

const startServer =async () => {
    try {        
        connectDb(process.env.MONGODB_URL as string);
        app.listen(8000,()=> console.log("Server is running on port http://localhost:8000"));
    } catch (error) {
        console.log(error);
    }
}

startServer();
