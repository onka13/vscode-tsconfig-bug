import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req: Request, res: Response, next: NextFunction) {
	res.send('Success');
});

app.listen(4001, function() {
	console.log('Running...');
});
