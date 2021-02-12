import express, { json } from 'express';
import { config } from '../../config';
import response from '../network/response';

import {router as user} from './components/user/network';

const app = express();
app.use(json());

app.use('/api/user/', user)

app.get('/', (req, res) => {
	response.success(req, res, 'Hello, TypeScript!', 200);
});

app.listen(config.api.port, () => {
	console.log(`🚀 Server started on http://localhost:${config.api.port}`);
});
