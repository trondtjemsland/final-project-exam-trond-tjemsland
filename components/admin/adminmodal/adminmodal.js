import { Icon } from '@iconify/react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
	identifier: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(8, 'To short').required('Required'),
});

const AdminModal = ({ setIsOpen }) => {
	const router = useRouter();

	const handleSubmit = async (value) => {
		try {
			await axios.post('/api/login', { ...value });
			router.push('/admin');
			console.log('succsesion');
		} catch (err) {
			console.log('Error', err.response.data);
		}
	};

	return (
		<>
			<div onClick={() => setIsOpen(false)} />
			<div className="adminmodal_wrapper">
				<div className="adminmodal">
					<button className="modal__close-btn" onClick={() => setIsOpen(false)}>
						<Icon icon="ci:close-small" color="00000" height={46} />
					</button>

					<div className="adminmodal_container">
						<h1 className="payment_heading">Admin Login</h1>
						<div>
							<Formik
								initialValues={{
									password: '',
									identifier: '',
								}}
								validationSchema={SignupSchema}
								onSubmit={(values) => {
									handleSubmit(values);
									console.log(values);
								}}>
								{({ errors, touched }) => (
									<Form className="loginForm">
										<Field
											id="identifier"
											name="identifier"
											type="email"
											placeholder="Email"
											className="loginInputField"
										/>
										{errors.email && touched.email ? (
											<div>{errors.email}</div>
										) : null}
										<Field
											id="password"
											name="password"
											placeholder="Password"
											lable="Password"
											className="loginInputField"
											type="password"
										/>
										{errors.password && touched.password ? (
											<div>{errors.password}</div>
										) : null}
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminModal;
