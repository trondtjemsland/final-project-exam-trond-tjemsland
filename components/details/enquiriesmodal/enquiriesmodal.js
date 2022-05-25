import React from 'react';
import { Icon } from '@iconify/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASEURL } from '../../lib/variables';

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Name Required'),
	message: Yup.string()
		.min(10, 'Too Short!')
		.max(120, 'Too Long!')
		.required('Message to short'),
	phonenumber: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Phonenumber Required'),
	email: Yup.string().email('Invalid email').required('Valid Email Required'),
});

const MessageModal = ({ setIsOpen }) => {
	const router = useRouter();
	return (
		<>
			<div onClick={() => setIsOpen(false)} />
			<div className="modal_wrapper">
				<div className="modal">
					<button className="modal__close-btn" onClick={() => setIsOpen(false)}>
						<Icon icon="ci:close-small" color="00000" height={46} />
					</button>
					<div className="enq_wrapper">
						<h1>Send your message</h1>
						<Formik
							initialValues={{
								name: '',
								message: '',
								email: '',
								phonenumber: '',
							}}
							validationSchema={SignupSchema}
							onSubmit={(newEnquirie) => {
								async function postdata() {
									let response = await axios.post(
										`${BASEURL}/enquiries`,
										newEnquirie
									);

									console.log(response);
									alert('Success! Please refresh the browser.');
									router.replace(router.asPath);
								}
								postdata();
							}}>
							{({ errors, touched }) => (
								<Form className="enq_form">
									<Field
										className="enq_input"
										name="name"
										placeholder="Enter your name"
									/>
									{errors.name && touched.name ? (
										<div className="error">{errors.name}</div>
									) : null}
									<Field
										className="enq_input"
										name="phonenumber"
										placeholder="Enter your phonenumber"
									/>
									{errors.phonenumber && touched.phonenumber ? (
										<div className="error">{errors.phonenumber}</div>
									) : null}
									<Field
										className="enq_input"
										name="email"
										type="email"
										placeholder="Enter your email"
									/>
									{errors.email && touched.email ? (
										<div className="error">{errors.email}</div>
									) : null}
									<Field
										type="textarea"
										name="message"
										component="textarea"
										placeholder="Enter your message here"
										className="messageInput"
									/>
									{errors.textarea && touched.textarea ? (
										<div className="error">{errors.textarea}</div>
									) : null}
									<button className="contactBtn" type="submit">
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageModal;
