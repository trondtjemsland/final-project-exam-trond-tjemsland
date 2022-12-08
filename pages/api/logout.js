import { destroyCookie } from 'nookies';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	destroyCookie({ res }, 'jwt', {
		path: '/',
	});

	res.status(200).end();
};
