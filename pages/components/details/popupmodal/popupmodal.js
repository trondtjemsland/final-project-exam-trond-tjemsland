import React from 'react';
import { Icon } from '@iconify/react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
});

const Modal = ({ setIsOpen }) => {
	return (
		<>
			<div onClick={() => setIsOpen(false)} />
			<div className="modal_wrapper">
				<div className="modal">
					<button className="modal__close-btn" onClick={() => setIsOpen(false)}>
						<Icon icon="ci:close-small" color="00000" height={46} />
					</button>
					<div className="modal_boxLeft">
						<div className="thankuWrapper">
							<div className="thankuWrapper_heading">
								<h2>Thank you for booking your hotel with us</h2>
							</div>
							<div>
								<div className="thankuWrapper_ImageWrapper"></div>
								<div className="thankuWrapper_infoWrapper"></div>
								<div className="thankuWrapper_priceWrapper"></div>
							</div>
						</div>
					</div>
					<div className="modal_boxRight">
						<div className="payment_wrapper">
							<div>
								<h1 className="payment_heading">Payment</h1>
								<Formik
									initialValues={{
										firstName: '',
										lastName: '',
										email: '',
									}}
									validationSchema={SignupSchema}
									onSubmit={(values) => {
										// same shape as initial values
										console.log(values);
									}}>
									{({ errors, touched }) => (
										<Form className="paymentForm">
											<label htmlFor="firstName">Cardholders Name</label>
											<Field
												id="firstName"
												name="firstName"
												placeholder="Name on card"
												lable="Cardholders name"
												className="paymentInputField"
											/>
											{errors.firstName && touched.firstName ? (
												<div>{errors.firstName}</div>
											) : null}
											<label htmlFor="firstName">Cardnumber</label>
											<Field
												name="cardNumber"
												id="cardNumber"
												placeholder="---- ---- ---- ----"
												className="paymentInputField"
											/>
											{errors.lastName && touched.lastName ? (
												<div>{errors.lastName}</div>
											) : null}
											<div className="paymentForm_codebox">
												<div className="test">
													<label htmlFor="expiryDate">Expiry Date</label>
													<Field
														name="expiryDate"
														id="expiryDate"
														type="text"
														placeholder="Mm/Yy"
														className="paymentInputField_code"
													/>
													{errors.email && touched.email ? (
														<div>{errors.email}</div>
													) : null}
												</div>
												<div className="test">
													<label htmlFor="cvv">CVV</label>
													<Field
														name="cvv"
														id="cvv"
														type="text"
														placeholder="Code"
														className="paymentInputField_code"
													/>
													{errors.email && touched.email ? (
														<div>{errors.email}</div>
													) : null}
												</div>
											</div>

											<button className="paymentBtn" type="submit">
												Pay now
											</button>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;