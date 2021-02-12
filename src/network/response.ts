import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const success = (
	req: Request,
	res: Response,
	message = '',
	status = StatusCodes.OK
) => {
	const statusCode = status || 200;
	res.status(status).send({
		error: false,
		status,
		body: message,
	});
};

const error = (
	req: Request,
	res: Response,
	message = '',
	status = StatusCodes.INTERNAL_SERVER_ERROR
) => {
	res.status(status).send({
		error: false,
		status,
		body: message,
	});
};

export default { success, error };
