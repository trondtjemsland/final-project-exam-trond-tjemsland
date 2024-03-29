import axios from 'axios';
import { setCookie } from 'nookies';
import { BASEURL } from '../../components/lib/variables';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	const { password, identifier } = req.body;

	try {
		const postRes = await axios.post(BASEURL + '/auth/local', {
			identifier,
			password,
		});

		setCookie({ res }, 'jwt', postRes.data.jwt, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		});

		res.status(200).end();
	} catch (e) {
		res.status(400).send(e.response.data.message[0].messages[0]);
	}
};
