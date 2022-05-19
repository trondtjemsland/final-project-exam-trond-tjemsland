import React from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	price: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	country: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	adress: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	imageUrl: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
});

const AddModal = ({ setIsOpen, JWT }) => {
	const router = useRouter();

	return (
		<>
			<div onClick={() => setIsOpen(false)} />
			<div className="modal_wrapper">
				<div className="modal">
					<button className="modal__close-btn" onClick={() => setIsOpen(false)}>
						<Icon icon="ci:close-small" color="00000" height={46} />
					</button>
					<div className="addModalWrapper">
						<h1>Add Hotel</h1>
						<Formik
							initialValues={{
								title: '',
								price: '',
								country: '',
								adress: '',
								imageUrl: '',
								featuredHotel: false,
							}}
							validationSchema={SignupSchema}
							onSubmit={(newHotel) => {
								console.log(JWT);
								async function postdata() {
									let response = await axios.post(
										`http://localhost:1337/hotels`,
										newHotel,
										{
											headers: {
												Authorization: `Bearer ${JWT}`,
											},
										}
									);

									console.log(response);
									alert('Success! Please refresh the browser.');
									router.replace(router.asPath);
								}
								postdata();
							}}>
							{({ errors, touched }) => (
								<Form className="addModalForm">
									<Field
										className="addModalForm_input"
										name="title"
										placeholder="Title"
									/>
									{errors.title && touched.title ? (
										<div>{errors.title}</div>
									) : null}

									<Field
										className="addModalForm_input"
										name="price"
										placeholder="Price"
									/>
									{errors.price && touched.price ? (
										<div>{errors.price}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="country"
										placeholder="Country"
									/>
									{errors.country && touched.country ? (
										<div>{errors.country}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="adress"
										placeholder="Adress"
									/>
									{errors.adress && touched.adress ? (
										<div>{errors.adress}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="imageUrl"
										placeholder="imageUrl"
									/>
									{errors.imageUrl && touched.imageUrl ? (
										<div>{errors.imageUrl}</div>
									) : null}

									<label>
										<Field type="checkbox" name="featuredHotel" />
										<span>Featured</span>
									</label>

									<button className="addBtn" type="submit">
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

export default AddModal;
