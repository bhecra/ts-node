import express from 'express';

import response from '../../../network/response';

const router = express.Router();

router.get('/', (req, res) => {
	response.success(req, res, 'Todo Ok!', 200);
});


export {router}