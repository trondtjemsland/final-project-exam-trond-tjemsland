import React from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASEURL } from '../../lib/variables';

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
	sliderImg1: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
	sliderImg2: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
	sliderImg3: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
	sliderImg4: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
	sliderImg5: Yup.string()
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
								icons: {
									wellness: false,
									fitness: false,
									petFriendly: false,
									noSmoking: false,
									wifi: false,
									parking: false,
									aircon: false,
									restaurant: false,
									accsessibility: false,
								},
								sliderImages: {
									sliderImg1: '',
									sliderImg2: '',
									sliderImg3: '',
									sliderImg4: '',
									sliderImg5: '',
								},
							}}
							validationSchema={SignupSchema}
							onSubmit={(newHotel) => {
								console.log(JWT);
								async function postdata() {
									let response = await axios.post(
										`${BASEURL}/hotels`,
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
									<Field
										className="addModalForm_input"
										name="sliderImg1"
										placeholder="sliderImg1"
									/>
									{errors.sliderImg1 && touched.sliderImg1 ? (
										<div>{errors.sliderImg1}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImg2"
										placeholder="sliderImg2"
									/>
									{errors.sliderImg2 && touched.sliderImg2 ? (
										<div>{errors.sliderImg2}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImg3"
										placeholder="sliderImg3"
									/>
									{errors.sliderImg3 && touched.sliderImg3 ? (
										<div>{errors.sliderImg3}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImg4"
										placeholder="sliderImg4"
									/>
									{errors.sliderImg4 && touched.sliderImg4 ? (
										<div>{errors.sliderImg4}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImg5"
										placeholder="sliderImg5"
									/>
									{errors.sliderImg5 && touched.sliderImg5 ? (
										<div>{errors.sliderImg5}</div>
									) : null}
									<div className="addModalForm_amenitiesWrapper">
										<label>
											<Field type="checkbox" name="featuredHotel" />
											<span>Featured</span>
										</label>
										<label>
											<Field type="checkbox" name="wellness" />
											<span>Wellness</span>
										</label>
										<label>
											<Field type="checkbox" name="petFriendly" />
											<span>petFriendly</span>
										</label>
										<label>
											<Field type="checkbox" name="noSmoking" />
											<span>noSmoking</span>
										</label>
										<label>
											<Field type="checkbox" name="wifi" />
											<span>wifi</span>
										</label>
										<label>
											<Field type="checkbox" name="parking" />
											<span>parking</span>
										</label>
										<label>
											<Field type="checkbox" name="aircon" />
											<span>aircon</span>
										</label>
										<label>
											<Field type="checkbox" name="restaurant" />
											<span>restaurant</span>
										</label>
										<label>
											<Field type="checkbox" name="accsessibility" />
											<span>ccsessibility</span>
										</label>
									</div>
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
