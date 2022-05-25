import React from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Formik, Form, Field, FieldArray } from 'formik';
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

	imgAlt: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
	mapImg: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),

	sliderImages: Yup.object().shape({
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
	}),
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
								imgAlt: '',
								mapImg: '',
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
								reviews: [
									{
										name: '',
										guestImage: '',
										reviewText: '',
										reviewTitle: '',
									},
								],
							}}
							validationSchema={SignupSchema}
							onSubmit={(newHotel) => {
								console.log(JWT);
								console.log(newHotel);
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
							{({ errors, touched, values }) => (
								<Form className="addModalForm">
									<Field
										className="addModalForm_input"
										name="title"
										placeholder="Title"
									/>
									{errors.title && touched.title ? (
										<div className="error">{errors.title}</div>
									) : null}

									<Field
										className="addModalForm_input"
										name="price"
										placeholder="Price"
									/>
									{errors.price && touched.price ? (
										<div className="error">{errors.price}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="country"
										placeholder="Country"
									/>
									{errors.country && touched.country ? (
										<div className="error">{errors.country}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="adress"
										placeholder="Adress"
									/>
									{errors.adress && touched.adress ? (
										<div className="error">{errors.adress}</div>
									) : null}

									<Field
										className="addModalForm_input"
										name="mapImg"
										placeholder="mapImg"
									/>
									{errors.mapImg && touched.mapImg ? (
										<div className="error">{errors.mapImg}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="imageUrl"
										placeholder="imageUrl"
									/>
									{errors.imageUrl && touched.imageUrl ? (
										<div className="error">{errors.imageUrl}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="imgAlt"
										placeholder="imgAlt"
									/>
									{errors.imgAlt && touched.imgAlt ? (
										<div className="error">{errors.imgAlt}</div>
									) : null}

									<Field
										className="addModalForm_input"
										name="sliderImages.sliderImg1"
										placeholder="sliderImg1"
									/>
									{errors.sliderImg1 && touched.sliderImg1 ? (
										<div className="error">{errors.sliderImg1}</div>
									) : null}

									<Field
										className="addModalForm_input"
										name="sliderImages.sliderImg2"
										placeholder="sliderImg2"
									/>
									{errors.sliderImg2 && touched.sliderImg2 ? (
										<div className="error">{errors.sliderImg2}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImages.sliderImg3"
										placeholder="sliderImg3"
									/>
									{errors.sliderImg3 && touched.sliderImg3 ? (
										<div className="error">{errors.sliderImg3}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImages.sliderImg4"
										placeholder="sliderImg4"
									/>
									{errors.sliderImg4 && touched.sliderImg4 ? (
										<div className="error">{errors.sliderImg4}</div>
									) : null}
									<Field
										className="addModalForm_input"
										name="sliderImages.sliderImg5"
										placeholder="sliderImg5"
									/>
									{errors.sliderImg5 && touched.sliderImg5 ? (
										<div className="error">{errors.sliderImg5}</div>
									) : null}
									<div className="addModalForm_amenitiesWrapper">
										<label>
											<Field type="checkbox" name="featuredHotel" />
											<span>Featured</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.wellness" />
											<span>Wellness</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.petFriendly" />
											<span>petFriendly</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.noSmoking" />
											<span>noSmoking</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.wifi" />
											<span>wifi</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.parking" />
											<span>parking</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.aircon" />
											<span>aircon</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.restaurant" />
											<span>restaurant</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.accsessibility" />
											<span>accsessibility</span>
										</label>
										<label>
											<Field type="checkbox" name="icons.fitness" />
											<span>fitness</span>
										</label>
									</div>
									<FieldArray
										name="reviews"
										render={(arrayHelpers) => (
											<div className="guestReviewsModalForm">
												{values.reviews && values.reviews.length > 0 ? (
													values.reviews.map((review, index) => (
														<div
															className="guestReviewsModalForm_container"
															key={index}>
															<Field
																className="guestReviewsModalForm_input"
																name={`reviews.${index}.name`}
																placeholder="Name"
															/>
															<Field
																name={`reviews.${index}.guestImage`}
																placeholder="guestImage"
																className="guestReviewsModalForm_input"
															/>
															<Field
																name={`reviews.${index}.reviewTitle`}
																placeholder="reviewTitle"
																className="guestReviewsModalForm_input"
															/>
															<Field
																name={`reviews.${index}.reviewText`}
																placeholder="reviewText"
																className="guestReviewsModalForm_input"
															/>
															<div className="guestReviewsModalForm_btnWrapper">
																<button
																	className="guestReviewsModalForm_btn"
																	onClick={() =>
																		arrayHelpers.remove(index, '')
																	}>
																	-
																</button>
																<button
																	className="guestReviewsModalForm_btn"
																	type="button"
																	onClick={() =>
																		arrayHelpers.insert(index, '')
																	}>
																	+
																</button>
															</div>
														</div>
													))
												) : (
													<button
														className="guestReviewsModalForm_btn"
														type="button"
														onClick={() => arrayHelpers.push('')}>
														Add a review
													</button>
												)}
											</div>
										)}
									/>
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

export default AddModal;
