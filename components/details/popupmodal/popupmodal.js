import React from 'react';
import { Icon } from '@iconify/react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import moment from 'moment';

const SignupSchema = Yup.object().shape({
	cardName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Name of cardholder Required'),
	cardNumber: Yup.string()
		.min(15, 'Too Short!')
		.max(17, 'Too Long!')
		.required('Cardnumber Required max 16'),
	code: Yup.string()
		.min(3, 'Too Short!')
		.max(3, 'Too Long!')
		.required('CVV Required'),
	month: Yup.string()
		.min(2, 'Too Short!')
		.max(8, 'Too Long!')
		.required('Valid date Required'),
});

const Modal = ({
	dateOne,
	dateTwo,
	hotels: { title, imageUrl, price, adress, imgAlt },
	setIsOpen,
}) => {
	const paymentLoader = ({ width = 200, quality = 100 }) => {
		return `${imageUrl}?w=${width}&q=${quality || 75}`;
	};

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

							<div className="thankuWrapper_container">
								<div className="thankuWrapper_box1">
									<div className="thankuWrapper_ImageWrapper">
										<Image
											src={imageUrl}
											width={240}
											height={150}
											loader={paymentLoader}
											alt={imgAlt}
										/>
									</div>
									<div className="thankuWrapper_infoWrapper">
										<h2>{title}</h2>
										<p>{adress}</p>
										<div className="thankuWrapper_infoWrapper_dates">
											<p>{moment(dateOne).format('MMM Do YY')}</p>
											<p>{moment(dateTwo).format('MMM Do YY')}</p>
										</div>
										<div className="thankuWrapper_priceWrapper">
											<p>${price}</p>
										</div>
									</div>
								</div>
								<div className="thankuWrapper_bonusWrapper">
									<div className="thankuWrapper_bonusWrapper_circle">
										<Icon
											className="thankuWrapper_bonusWrapper_circle_icon"
											icon="fa-solid:percent"
										/>
									</div>
									You have earned 500 points
								</div>
							</div>
						</div>
					</div>
					<div className="modal_boxRight">
						<div className="payment_wrapper">
							<div>
								<h1 className="payment_heading">Payment</h1>
								<Formik
									initialValues={{
										cardName: '',
										cardNumber: '',
										code: '',
										month: '',
									}}
									validationSchema={SignupSchema}
									onSubmit={(values) => {
										// same shape as initial values
										console.log(values);
									}}>
									{({ errors, touched }) => (
										<Form className="paymentForm">
											<label htmlFor="cardName">Cardholders Name</label>
											<Field
												id="cardName"
												name="cardName"
												placeholder="Name on card"
												lable="Cardholders name"
												className="paymentInputField"
											/>
											{errors.cardName && touched.cardName ? (
												<div className="error">{errors.cardName}</div>
											) : null}
											<label htmlFor="firstName">Cardnumber</label>
											<Field
												name="cardNumber"
												id="cardNumber"
												placeholder="---- ---- ---- ----"
												className="paymentInputField"
											/>
											{errors.cardNumber && touched.cardNumber ? (
												<div className="error">{errors.cardNumber}</div>
											) : null}
											<div className="paymentForm_codebox">
												<div className="test">
													<label htmlFor="expiryDate">Expiry Date</label>
													<Field
														name="month"
														id="expiryDate"
														type="text"
														placeholder="Mm/Yy"
														className="paymentInputField_code"
													/>
													{errors.month && touched.code ? (
														<div className="error">{errors.code}</div>
													) : null}
												</div>
												<div className="test">
													<label htmlFor="cvv">CVV</label>
													<Field
														name="code"
														id="cvv"
														type="text"
														placeholder="Code"
														className="paymentInputField_code"
													/>
													{errors.code && touched.code ? (
														<div className="error">{errors.code}</div>
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
